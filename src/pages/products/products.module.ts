import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomComponentsModule } from '../../components/custom-components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ProductPage } from './product.page';
import { ProductsPage } from './products.page';

@NgModule({
	declarations: [ProductsPage, ProductPage],
	entryComponents: [ProductsPage, ProductPage],
	imports: [IonicModule, PipesModule, CustomComponentsModule]
})
export class ProductsModule {
}