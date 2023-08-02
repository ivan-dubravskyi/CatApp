import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullScreenLoaderComponent } from './full-screen-loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [FullScreenLoaderComponent],
  exports: [FullScreenLoaderComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class FullScreenLoaderModule {}
