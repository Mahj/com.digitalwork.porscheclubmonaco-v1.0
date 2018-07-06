import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { CatalogItemPage } from './catalog-item.page';

@Component({
	templateUrl: './catalog-items.page.html',
	selector: 'as-page-catalog-items'
})
export class CatalogItemsPage {
	items$: FirebaseListObservable<any[]>;

	constructor(data: DataService, private nav: NavController) {
		this.items$ = data.getCatalogItems();
	}

	public itemTapped(item) {
		this.nav.push(CatalogItemPage, {
			item: item
		});
	}
}
