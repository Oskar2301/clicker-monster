import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage = localStorage;

  public setItem<T>(key: string, value: T): void {
    try {
      return this.storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('[VAULT SERVICE ISSUE]: ', error);
    }
  }

  public getItem<T = string>(key: string): T {
    try {
      return JSON.parse(this.storage.getItem(key) as string);
    } catch (error) {
      console.warn('[VAULT SERVICE ISSUE]: ', error);
    }
    return this.storage.getItem(key) as unknown as T;
  }

  public removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}
