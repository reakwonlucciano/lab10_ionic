import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
lat:any;
long:any;
  constructor(private flashlight: Flashlight, private geolocation:Geolocation) { }
 Flashlight(){
  this.flashlight.toggle();
 }
 GPS(){
   
this.geolocation.getCurrentPosition().then((resp) => {
  this.lat =  resp.coords.latitude;
  this.long = resp.coords.longitude;
 }).catch((error) => {
   console.log('Error getting location', error);
 });
 
 }
}
