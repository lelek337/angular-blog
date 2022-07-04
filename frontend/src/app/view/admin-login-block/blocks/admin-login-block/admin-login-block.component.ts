import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from 'src/app/store/admin-auth-store/store/admin-auth.actions';
import * as adminAuth from 'src/app/store/admin-auth-store/store/admin-auth.selectors';

@Component({
  selector: 'app-admin-login-block',
  templateUrl: './admin-login-block.component.html',
  styleUrls: ['./admin-login-block.component.scss']
})
export class AdminLoginBlockComponent implements OnInit {
  loading$: Observable<boolean> = this.store$.pipe(select(adminAuth.getLoading));
  loaded$: Observable<boolean> = this.store$.pipe(select(adminAuth.getLoaded));
  serverError$: Observable<string> = this.store$.pipe(select(adminAuth.getServerError));

  serverError = '';

  constructor(
    private store$: Store,
    private httpClient: HttpClient,
    ) { }

  ngOnInit(): void {}

  onLogin(value: {login: string, password: string}) {
    this.store$.dispatch(login(value));
  }

  testProfile() {
    this.httpClient.get('http://localhost:3000/auth/profile')
    .subscribe(console.log);
  }

}
