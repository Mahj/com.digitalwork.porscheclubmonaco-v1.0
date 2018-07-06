import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { PropertyPage } from './property.page';

@Component({
	templateUrl: './properties.page.html',
	selector: 'as-page-properties'
})
export class PropertiesPage {
	items$: FirebaseListObservable<any[]>;

	constructor(data: DataService, private nav: NavController) {
		this.items$ = data.getProperties();
	}

	public itemTapped(item) {
		this.nav.push(PropertyPage, {
			item: item
		});
	}
}
