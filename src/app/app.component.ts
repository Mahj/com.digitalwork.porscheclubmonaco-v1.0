import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { ActivityFeedPage } from '../pages/activity-feed/activity-feed.page';
import { CatalogItemsPage } from '../pages/catalog-items/catalog-items.page';
import { ChatRoomsPage } from '../pages/chat/chat-rooms.page';
import { GalleriesPage } from '../pages/galleries/galleries.page';

import { HomePage } from '../pages/home/home.page';
import { LoginPage } from '../pages/login/login.page';
import { MenuItemsPage } from '../pages/menu-items/menu-items.page';
import { NewsListPage } from '../pages/news/news-list.page';
import { ProductsPage } from '../pages/products/products.page';
import { PropertiesPage } from '../pages/properties/properties.page';
import { UserProfilesPage } from '../pages/user-profiles/user-profiles.page';
import { WelcomePage } from '../pages/welcome/welcome.page';
import { AuthService } from '../services/auth.service';

@Component({
	templateUrl: './app.html'
})
export class MyApp {
	pages;
	rootPage;

	private app;
	private platform;
	private menu: MenuController;

	@ViewChild(Nav) nav: Nav;

	constructor(app: App, platform: Platform, menu: MenuController, private statusBar: StatusBar, private auth: AuthService) {
		this.menu = menu;
		this.app = app;
		this.platform = platform;
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Activity Feed', component: ActivityFeedPage, icon: 'list' },
			{ title: 'News', component: NewsListPage, icon: 'paper' },
			{ title: 'Catalog Items', component: CatalogItemsPage, icon: 'list-box' },
			{ title: 'Products', component: ProductsPage, icon: 'cart' },
			{ title: 'Food Menu', component: MenuItemsPage, icon: 'menu' },
			{ title: 'User Profiles', component: UserProfilesPage, icon: 'people' },
			{ title: 'Real Estate', component: PropertiesPage, icon: 'book' },
			{ title: 'Galleries', component: GalleriesPage, icon: 'images' },
			{ title: 'Chat', component: ChatRoomsPage, icon: 'chatbubbles' }
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
		});

		this.auth.afAuth.authState
			.subscribe(
				user => {
					if (user) {
						this.rootPage = HomePage;
					} else {
						this.rootPage = WelcomePage;
					}
				},
				() => {
					this.rootPage = WelcomePage;
				}
			);
	}

	openPage(page) {
		this.menu.close();
		this.nav.setRoot(page.component);
	}

	logout() {
		this.menu.close();

		this.auth.signOut();
		this.nav.setRoot(WelcomePage);
	}

	login() {
		this.menu.close();

		this.auth.signOut();
		this.nav.setRoot(LoginPage);
	}
}
