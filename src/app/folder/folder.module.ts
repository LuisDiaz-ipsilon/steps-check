import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { StepsComponent } from './components/steps/steps.component';
import { InfoComponent } from './components/info/info.component';
import { NgxChartsModule} from '@swimlane/ngx-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HealthConnectComponent } from './components/health-connect/health-connect.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    NgxChartsModule,
  ],
  declarations: [FolderPage, StepsComponent, InfoComponent, HealthConnectComponent]
})
export class FolderPageModule {}
