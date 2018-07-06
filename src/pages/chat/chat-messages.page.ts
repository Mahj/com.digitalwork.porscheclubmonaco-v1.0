import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { NavParams } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'as-page-chat-messages',
	templateUrl: './chat-messages.page.html'
})
export class ChatMessagesPage {
	item: any;
	messages$: FirebaseListObservable<any[]>;
	placeholderText: string = 'Enter a message';

	constructor(navParams: NavParams, data: DataService, public auth: AuthService) {
		this.item = navParams.get('item');
		this.messages$ = data.getChatMessages(this.item.$key);
		this.setPlaceholder(auth);
	}

	send(message: string) {
		this.messages$.push({
			createdAt: new Date().getTime(),
			from: this.auth.getName(),
			text: message
		});
	}

	setPlaceholder(auth) {
		if (!auth.authenticated) {
			this.placeholderText = 'Please, login to post a message';
		}
	}
}
