import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratarmePage } from './contratarme.page';

const routes: Routes = [
  {
    path: '',
    component: ContratarmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratarmePageRoutingModule {}
