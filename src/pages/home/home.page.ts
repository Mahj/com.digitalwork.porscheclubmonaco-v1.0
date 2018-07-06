import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { data } from './home-data';

import { Tile } from './models/tile.model';
import { ActivityFeedPage } from '../activity-feed/activity-feed.page';
import { NewsListPage } from '../news/news-list.page';
import { CatalogItemsPage } from '../catalog-items/catalog-items.page';
import { ProductsPage } from '../products/products.page';
import { MenuItemsPage } from '../menu-items/menu-items.page';
import { UserProfilesPage } from '../user-profiles/user-profiles.page';
import { PropertiesPage } from '../properties/properties.page';
import { GalleriesPage } from '../galleries/galleries.page';

@Component({
	templateUrl: 'home.html',
	providers: [],
	selector: 'as-page-home'
})
export class HomePage {
	public tiles: Tile[][];

	private nav: Nav;

	constructor(
		nav: Nav
	) {
		this.nav = nav;
		this.initTiles();
	}

	public navigateTo(tile) {
		this.nav.push(tile.component);
	}

	private initTiles(): void {
		this.tiles = [
			[
				{
					title: 'Activity Feed',
					path: 'activity-feed',
					icon: 'list',
					component: ActivityFeedPage
				},
				{
					title: 'News',
					path: 'news',
					icon: 'paper',
					component: NewsListPage
				}
			],
			[
				{
					title: 'Catalog Items',
					path: 'catalog-items',
					icon: 'list-box',
					component: CatalogItemsPage
				},
				{
					title: 'Products',
					path: 'products',
					icon: 'cart',
					component: ProductsPage
				}
			],
			[
				{
					title: 'Food Menu',
					path: 'menu-items',
					icon: 'menu',
					component: MenuItemsPage
				},
				{
					title: 'User Profiles',
					path: 'user-profiles',
					icon: 'people',
					component: UserProfilesPage
				}
			],
			[
				{
					title: 'Real Estate',
					path: 'properties',
					icon: 'book',
					component: PropertiesPage
				},
				{
					title: 'Galleries',
					path: 'galleries',
					icon: 'images',
					component: GalleriesPage
				}
			]
		];
	}
}
