import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenaireRoutingModule } from './openaire-routing.module';
import { OpenaireComponent } from './openaire.component';

@NgModule({
  imports: [
    CommonModule,
    OpenaireRoutingModule
  ],
  declarations: [OpenaireComponent]
})
export class OpenaireModule { }
