import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratarmePageRoutingModule } from './contratarme-routing.module';

import { ContratarmePage } from './contratarme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratarmePageRoutingModule
  ],
  declarations: [ContratarmePage]
})
export class ContratarmePageModule {}
