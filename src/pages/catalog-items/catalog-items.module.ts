import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomComponentsModule } from '../../components/custom-components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { CatalogItemPage } from './catalog-item.page';
import { CatalogItemsPage } from './catalog-items.page';

@NgModule({
	declarations: [CatalogItemPage, CatalogItemsPage],
	entryComponents: [CatalogItemPage, CatalogItemsPage],
	imports: [IonicModule, PipesModule, CustomComponentsModule]
})
export class CatalogItemsModule {
}