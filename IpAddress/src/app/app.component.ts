import { CommonService } from './common.service';
import { Component, Input, OnInit } from '@angular/core';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'IpAddress';

  public location:any;
  constructor(private CommonService:CommonService){
  }

  ngOnInit(): void{
        var map = L.map('map').setView([51.5, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

      var imgMarcador = L.icon({
        iconUrl: '../assets/images/icon-location.svg',
        shadowUrl: 'leaf-shadow.png',

        iconSize:     [35, 45], // size of the icon
    });

      var marker = L.marker([51.5, -0.09], {icon: imgMarcador}).addTo(map);


   /// Código do IP
   this.CommonService.getLocation().subscribe((response)=>{
    console.log(response);
    this.location = response;
  })
  }





}
