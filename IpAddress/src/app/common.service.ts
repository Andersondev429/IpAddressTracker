import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }


  getLocation(){
    return this.http.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_pUiG1IHAK2Jii75VG7jlImT6YACJk&ipAddress=8.8.8.8');
  }
}
