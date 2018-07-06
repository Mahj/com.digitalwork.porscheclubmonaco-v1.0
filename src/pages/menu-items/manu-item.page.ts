import { Component } from '@angular/core';

import { NavParams, AlertController } from 'ionic-angular';

@Component({
	templateUrl: './menu-item.page.html',
	selector: 'as-page-menu-item'
})
export class MenuItemPage {
	item: any;
	selectedPrice: any;

	get hasStandardOptions() {
		return this.item.standardOptions && this.item.standardOptions.length > 0;
	}

	get hasExtraOptions() {
		return this.item.extraOptions && this.item.extraOptions.length > 0;
	}

	constructor(navParams: NavParams, public alertCtrl: AlertController) {
		this.item = navParams.get('item');
		this.selectedPrice = this.item.price[0];
	}

	showAlert(itemTitle) {
		let alert = this.alertCtrl.create({
			title: 'Added to Cart!',
			message: itemTitle + ' was sucessfully added to your cart.',
			buttons: ['Ok']
		});
		alert.present();
	}
}
