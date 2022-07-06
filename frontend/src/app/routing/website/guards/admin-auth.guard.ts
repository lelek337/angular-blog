import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { AdminAuthService } from 'src/app/store/admin-auth-store/servises/admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private adminAuthService: AdminAuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return confirm('Are you auth(activate)');
    return this.getIsAuth();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return confirm('Are you auth(load)');
    return this.getIsAuth();
  }
  private getIsAuth(): Observable<boolean> {

    return this.adminAuthService.isAuth$.pipe(
      first(),
      map(isAuth => {
        if (!isAuth) {
          this.router.navigateByUrl('/admin/auth/login');
        }
        return isAuth;
      })
    )
  }
}
