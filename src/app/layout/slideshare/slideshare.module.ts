import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshareRoutingModule } from './slideshare-routing.module';
import { SlideshareComponent } from './slideshare.component';

@NgModule({
  imports: [
    CommonModule,
    SlideshareRoutingModule
  ],
  declarations: [SlideshareComponent]
})
export class SlideshareModule { }
