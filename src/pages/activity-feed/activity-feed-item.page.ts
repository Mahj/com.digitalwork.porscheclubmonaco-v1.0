import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

@Component({
	templateUrl: './activity-feed-item.page.html',
	selector: 'as-page-activity-feed-item'
})
export class ActivityFeedItemPage {
	item: any;

	constructor(navParams: NavParams) {
		this.item = navParams.get('item');
	}
}
