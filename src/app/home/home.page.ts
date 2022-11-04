import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage   {
  public info: any[]=[];

  constructor(private http: HttpClient) { }

  getGenero(value: any) {
    this.http.get(`https://api.genderize.io/?name=${value}`).subscribe((resp: any)=>{
      this.info= resp.gender;
      console.log(value);
    }
    );
}


}
