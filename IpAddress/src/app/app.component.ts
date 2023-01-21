import { CommonService } from './common.service';
import { Component, Input, OnInit } from '@angular/core';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'IpAddress';

  public ipText: any;

  public location: any;

  public latitude: number = 37.38605;
  public longitude: number = -122.08385;

  constructor(private CommonService:CommonService){
  }


  receberIp(event: any){
    this.ipText = event;
    this.latitude = this.location.location.lat;
    this.longitude = this.location.location.lng;
    console.log(this.latitude, this.longitude)
    this.ngOnInit();
  }

  ngOnInit(): void{
        var map = L.map('map').setView([this.latitude, this.longitude], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

      var imgMarcador = L.icon({
        iconUrl: '../assets/images/icon-location.svg',
        shadowUrl: 'leaf-shadow.png',

        iconSize:     [35, 45], // size of the icon
    });

      var marker = L.marker([this.latitude, this.longitude], {icon: imgMarcador}).addTo(map);



   /// Código do IP
   this.CommonService.getLocation().subscribe((response)=>{
    console.log(response);
    this.location = response;
  })
  }
}

