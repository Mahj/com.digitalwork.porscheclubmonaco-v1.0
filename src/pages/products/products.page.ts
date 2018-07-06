import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { ProductPage } from './product.page';

@Component({
	templateUrl: './products.page.html',
	selector: 'as-page-products'
})
export class ProductsPage {
	items$: FirebaseListObservable<any[]>;

	constructor(data: DataService, private nav: NavController) {
		this.items$ = data.getProducts();
	}

	public itemTapped(item) {
		this.nav.push(ProductPage, {
			item: item
		});
	}
}
