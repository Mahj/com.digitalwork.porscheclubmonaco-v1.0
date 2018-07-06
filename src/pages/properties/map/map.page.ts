import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
	templateUrl: 'map.html'
})
export class MapPage {
	markers: any;
	origin: any;
	zoom = 8;


	constructor(private navParams: NavParams) {
		this.markers = [{
			lat: this.navParams.get('lat'),
			lng: this.navParams.get('lng')
		}];
		this.origin = {
			lat: this.navParams.get('lat'),
			lng: this.navParams.get('lng')
		};
	}
}
