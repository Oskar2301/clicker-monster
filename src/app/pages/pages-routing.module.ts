import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERoute } from '../utilities/enums/routes.enum';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: ERoute.Profile, component: ProfileComponent },
  { path: ERoute.Welcome, component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
