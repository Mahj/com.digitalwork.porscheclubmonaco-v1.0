import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CustomComponentsModule } from '../components/custom-components.module';
import { config } from '../config';
import { ActivityFeedModule } from '../pages/activity-feed/activity-feed.module';
import { CatalogItemsModule } from '../pages/catalog-items/catalog-items.module';

import { GalleriesModule } from '../pages/galleries/galleries.module';
import { HomeModule } from '../pages/home/home.module';
import { LoginPage } from '../pages/login/login.page';
import { MenuItemsModule } from '../pages/menu-items/menu-items.module';
import { NewsModule } from '../pages/news/news.module';
import { ProductsModule } from '../pages/products/products.module';
import { PropertiesModule } from '../pages/properties/properties.module';
import { SignupPage } from '../pages/signup/signup.page';
import { UserProfilesModules } from '../pages/user-profiles/user-profiles.module';
import { WelcomePage } from '../pages/welcome/welcome.page';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { MyApp } from './app.component';
import { ChatModule } from '../pages/chat/chat.module';
import { ResetPasswordPage } from '../pages/reset-password/reset-password.page';

@NgModule({
	declarations: [
		MyApp,
		WelcomePage,
		LoginPage,
		SignupPage,
		ResetPasswordPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),

		AngularFireModule.initializeApp(config.fire),

		HomeModule,
		NgxErrorsModule,
		ActivityFeedModule,
		NewsModule,
		CatalogItemsModule,
		CustomComponentsModule,
		ProductsModule,
		MenuItemsModule,
		UserProfilesModules,
		PropertiesModule,
		GalleriesModule,
		ChatModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		WelcomePage,
		LoginPage,
		SignupPage,
		ResetPasswordPage
	],
	providers: [
		StatusBar,
		AuthService,
		AngularFireAuth,
		AngularFireDatabase,
		DataService
	]
})
export class AppModule {
}
