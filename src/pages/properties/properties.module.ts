import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomComponentsModule } from '../../components/custom-components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { PropertiesPage } from './properties.page';
import { PropertyPage } from './property.page';
import { MapPage } from './map/map.page';

@NgModule({
	declarations: [PropertiesPage, PropertyPage, MapPage],
	entryComponents: [PropertiesPage, PropertyPage, MapPage],
	imports: [IonicModule, PipesModule, CustomComponentsModule, AgmCoreModule.forRoot()]
})
export class PropertiesModule {
}
