import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { ActivityFeedItemPage } from './activity-feed-item.page';

@Component({
	templateUrl: './activity-feed.page.html',
	selector: 'as-page-activity-feed'
})
export class ActivityFeedPage {
	items$: FirebaseListObservable<any[]>;

	constructor(data: DataService, private nav: NavController, public auth: AuthService) {
		this.items$ = data.getActivityFeed();
	}

	itemTapped(item) {
		this.nav.push(ActivityFeedItemPage, {
			item: item
		});
	}

	send(message) {
		let index = message.indexOf('\n');
		let title = message.substring(0, index).trim();
		let body = message.substring(index).trim();

		this.items$.push({
			title: title,
			body: body,
			date: new Date().getTime(),
			posted_by: this.auth.getUsername()
		});
	}
}
