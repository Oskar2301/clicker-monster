import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [ProfileComponent, WelcomeComponent, GameComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
  providers: [],
})
export class PagesModule {}
