import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage {
  public info =0;
 message = '';

  constructor(private _services: ApiService) { }
  edad(value: any){
    this._services.getEdad(value).subscribe((data: any) =>{
      this.info = data.age;
   if (this.info<=39) {
    this.message='Joven';

   }
   else if (this.info<=40 || this.info <=59){
    this.message='Adulto';
   }

else if (this.info <=60 || this.info<= 100 ){
this.message='Envejeciente';
}

  });

  }



}
