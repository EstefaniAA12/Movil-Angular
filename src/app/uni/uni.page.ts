import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-uni',
  templateUrl: './uni.page.html',
  styleUrls: ['./uni.page.scss'],
})
export class UniPage  {
public uni: any[]=[];
  constructor(private _services: ApiService ) { 

  }
  getUni(value: any) {
    this._services.getUniversidad(value).subscribe((data: any) =>{
     this.uni = data;
    console.log(data);
    }
    );
}
}
