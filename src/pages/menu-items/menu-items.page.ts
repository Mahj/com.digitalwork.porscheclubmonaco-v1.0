import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { MenuItemPage } from './manu-item.page';

@Component({
	templateUrl: './menu-items.page.html',
	selector: 'as-page-menu-items'
})
export class MenuItemsPage {
	items$: FirebaseListObservable<any[]>;

	constructor(data: DataService, private nav: NavController) {
		this.items$ = data.getMenuItems();
	}

	public itemTapped(item) {
		this.nav.push(MenuItemPage, {
			item: item
		});
	}
}
