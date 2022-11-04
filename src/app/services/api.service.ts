import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private _http: HttpClient) { }

  /*getGenero(name: string){
return this._http.get (`https://api.genderize.io/?name=${name}`);

}*/

getEdad (name: string){
return this._http.get(`https://api.agify.io/?name=${name}`);
}

getUniversidad(name: string){
  if(name.includes(' ')){
    const SPLITNAME = name.split(' ');
    name = SPLITNAME.join('+');

 }
return this._http.get(`http://universities.hipolabs.com/search?country=${name}`);
}
}