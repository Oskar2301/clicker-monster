import { NgModule } from '@angular/core';
import { BackgroundCloudComponent } from './components/background-cloud/background-cloud.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { AuthGuard } from './guards/auth.guard';
import { NonAuthGuard } from './guards/non-auth.guard';

@NgModule({
  declarations: [BackgroundCloudComponent, ButtonComponent],
  exports: [BackgroundCloudComponent, ButtonComponent],
  imports: [CommonModule],
  providers: [AuthGuard, NonAuthGuard],
})
export class SharedModule {}
