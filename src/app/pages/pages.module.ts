import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [ProfileComponent, WelcomeComponent],
  imports: [CommonModule, PagesRoutingModule],
  providers: [],
})
export class PagesModule {}
