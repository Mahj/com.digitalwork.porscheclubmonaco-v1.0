import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { NewsItemPage } from './news-item.page';

@Component({
	templateUrl: './news-list.page.html',
	selector: 'as-page-news-list'
})
export class NewsListPage {
	items$: FirebaseListObservable<any[]>;

	constructor(data: DataService, private nav: NavController) {
		this.items$ = data.getNewsList();
	}

	public itemTapped(item) {
		this.nav.push(NewsItemPage, {
			item: item
		});
	}
}
