import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERoute } from '../utilities/enums/routes.enum';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameComponent } from './game/game.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { NonAuthGuard } from '../shared/guards/non-auth.guard';

const routes: Routes = [
  { path: ERoute.Profile, component: ProfileComponent },
  {
    path: ERoute.Welcome,
    component: WelcomeComponent,
    canActivate: [AuthGuard],
  },
  { path: ERoute.Game, component: GameComponent, canActivate: [NonAuthGuard] },
  { path: '', redirectTo: ERoute.Welcome, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
