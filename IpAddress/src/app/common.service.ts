import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  public fromIpText: any;

  ip: any = "8.8.7.1";

  public updateFromIpText(newValue: any) {
    this.ip = newValue;
    console.log(this.ip);
    this.getLocation();
  }

  getLocation(){
    return this.http.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_pUiG1IHAK2Jii75VG7jlImT6YACJk&ipAddress=' + this.ip);
  }
}
