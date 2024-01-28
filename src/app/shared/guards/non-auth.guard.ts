import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/localstorage.service';
import { ERouteNavigate } from '../../utilities/enums/routes.enum';

@Injectable()
export class NonAuthGuard {
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
  ) {}

  canActivate(): boolean {
    const firstLoad = this.localStorageService.getItem('firstLoad');

    if (!firstLoad) {
      this.router.navigate([ERouteNavigate.Welcome]);
      return false;
    }
    return true;
  }
}
