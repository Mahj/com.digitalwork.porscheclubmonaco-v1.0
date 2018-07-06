import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

@Component({
	templateUrl: './gallery.page.html',
	selector: 'as-page-gallery'
})
export class GalleryPage {
	item: any;

	constructor(navParams: NavParams) {
		this.item = navParams.get('item');
	}
}
