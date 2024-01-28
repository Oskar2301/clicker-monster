import { NgModule } from '@angular/core';
import { BackgroundCloudComponent } from './components/background-cloud/background-cloud.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BackgroundCloudComponent],
  exports: [BackgroundCloudComponent],
  imports: [CommonModule],
  providers: [],
})
export class SharedModule {}
