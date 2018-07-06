import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { GalleryPage } from './gallery.page';

@Component({
	templateUrl: './galleries.page.html',
	selector: 'as-page-galleries'
})
export class GalleriesPage {
	items$: FirebaseListObservable<any[]>;

	constructor(data: DataService, private nav: NavController) {
		this.items$ = data.getGalleries();
		this.items$.subscribe(res => console.log(res));
	}

	public itemTapped(item) {
		this.nav.push(GalleryPage, {
			item: item
		});
	}
}
