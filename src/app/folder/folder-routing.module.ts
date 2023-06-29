import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { StepsComponent } from './components/steps/steps.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  {
    path: 'steps',
    component: StepsComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: '',
    component: FolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
