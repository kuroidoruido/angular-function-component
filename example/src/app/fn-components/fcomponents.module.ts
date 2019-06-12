import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FHelloComponent } from './fhello/fhello.component';

@NgModule({
  declarations: [
    FHelloComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FHelloComponent,
  ]
})
export class FcomponentsModule { }
