import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomComponentsModule } from '../../components/custom-components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { MenuItemsPage } from './menu-items.page';
import { MenuItemPage } from './manu-item.page';

@NgModule({
	declarations: [MenuItemsPage, MenuItemPage],
	entryComponents: [MenuItemsPage, MenuItemPage],
	imports: [IonicModule, PipesModule, CustomComponentsModule]
})
export class MenuItemsModule {
}