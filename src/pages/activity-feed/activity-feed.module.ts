import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ActivityFeedPage } from './activity-feed.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ActivityFeedItemPage } from './activity-feed-item.page';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
	declarations: [ActivityFeedPage, ActivityFeedItemPage],
	entryComponents: [ActivityFeedPage, ActivityFeedItemPage],
	imports: [IonicModule, PipesModule, Ng2OrderModule]
})
export class ActivityFeedModule {
}