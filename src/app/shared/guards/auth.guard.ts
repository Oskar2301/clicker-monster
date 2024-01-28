import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/localstorage.service';
import { ERouteNavigate } from 'src/app/utilities/enums/routes.enum';

@Injectable()
export class AuthGuard {
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
  ) {}

  canActivate(): boolean {
    const firstLoad = this.localStorageService.getItem('firstLoad');

    if (firstLoad) {
      this.router.navigate([ERouteNavigate.Game]);
      return false;
    }
    return true;
  }
}
