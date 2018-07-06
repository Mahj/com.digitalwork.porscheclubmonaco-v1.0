import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { InAppBrowserService } from '../../services/in-app-browser.service';

@Component({
	templateUrl: './catalog-item.page.html',
	selector: 'as-page-catalog-item'
})
export class CatalogItemPage {
	item: any;

	constructor(
		navParams: NavParams,
		private browserService: InAppBrowserService
	) {
		this.item = navParams.get('item');
	}

	public openUrl() {
		this.browserService.open(this.item.url);
	}

	public openPdf() {
		this.browserService.open(this.item.pdf);
	}
}
