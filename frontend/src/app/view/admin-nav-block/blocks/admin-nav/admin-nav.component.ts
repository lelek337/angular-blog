import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { initMenu } from 'src/app/store/admin-menu-store/store/admin-menu-action';
import { NestedTreeNode } from 'src/app/store/admin-menu-store/store/admin-menu-reducer';
import { getMenuData } from 'src/app/store/admin-menu-store/store/admin-menu.selectors';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {
  data$: Observable<NestedTreeNode[]> = this.store$.pipe(select(getMenuData))

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.store$.dispatch(initMenu());
  }

}
