import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { InAppBrowserService } from '../../services/in-app-browser.service';

@Component({
	templateUrl: './product.page.html',
	selector: 'as-page-product'
})
export class ProductPage {
	item: any;

	constructor(
		navParams: NavParams,
		private browserService: InAppBrowserService
	) {
		this.item = navParams.get('item');
		this.browserService = browserService;
	}

	public openUrl() {
		this.browserService.open(this.item.url);
	}
}
