import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomComponentsModule } from '../../components/custom-components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { GalleriesPage } from './galleries.page';
import { GalleryPage } from './gallery.page';

@NgModule({
	declarations: [GalleriesPage, GalleryPage],
	entryComponents: [GalleriesPage, GalleryPage],
	imports: [IonicModule, PipesModule, CustomComponentsModule]
})
export class GalleriesModule {
}