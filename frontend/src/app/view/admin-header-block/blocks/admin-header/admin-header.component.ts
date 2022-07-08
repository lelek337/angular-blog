import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/store/admin-auth-store/store/admin-auth.actions';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  constructor(private store$: Store) { }

  onLogout() {
    this.store$.dispatch(logout())
  }
}
