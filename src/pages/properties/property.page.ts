import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CallService } from '../../services/call.service';
import { EmailService } from '../../services/email.service';
import { InAppBrowserService } from '../../services/in-app-browser.service';
import { MapPage } from './map/map.page';

@Component({
	templateUrl: './property.page.html',
	selector: 'as-page-property'
})
export class PropertyPage {
	item: any;

	constructor(
		navParams: NavParams,
		private nav: NavController,
		private emailService: EmailService,
		private callService: CallService,
		private browserService: InAppBrowserService
	) {
		this.item = navParams.get('item');
		this.nav = nav;
	}

	public call() {
		this.callService.call(this.item.contact.phoneNumber);
	}

	public sendEmail() {
		let email = {
			to: this.item.contact.email,
			subject: 'Meeting request',
			body: 'I would like to arrange a meeting with you.'
		};

		this.emailService.sendEmail(email);
	}

	public openPage() {
		this.browserService.open(this.item.contact.web);
	}

	navigateToMap(annotation) {
		this.nav.push(MapPage, {
			lat: annotation.latitude,
			lng: annotation.longitude
		});
	}
}
