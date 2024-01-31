import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ERouteNavigate } from '../../utilities/enums/routes.enum';
import { LocalStorageService } from '../../shared/services/localstorage.service';
import { zoomInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [zoomInOnEnterAnimation()],
})
export class WelcomeComponent {
  public readonly monsterImage = 'assets/gif/happy-monster.gif';

  constructor(
    private readonly router: Router,
    private readonly localStorage: LocalStorageService,
  ) {}

  public getStart(): void {
    this.localStorage.setItem('firstLoad', true);
    this.router.navigate([ERouteNavigate.Game]);
  }
}
