import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FigshareRoutingModule } from './figshare-routing.module';
import { FigshareComponent } from './figshare.component';

@NgModule({
  imports: [
    CommonModule,
    FigshareRoutingModule
  ],
  declarations: [FigshareComponent]
})
export class FigshareModule { }
