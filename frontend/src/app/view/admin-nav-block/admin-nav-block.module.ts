import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavComponent } from './blocks/admin-nav/admin-nav.component';
import { NestedTreeUiComponent } from './ui/nested-tree-ui/nested-tree-ui.component';
import { RouterModule } from '@angular/router';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AdminMenuStoreModule } from 'src/app/store/admin-menu-store/admin-menu-store.module';

@NgModule({
  declarations: [
    AdminNavComponent,
    NestedTreeUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    AdminMenuStoreModule
  ],
  exports: [
    AdminNavComponent,
  ]
})
export class AdminNavBlockModule { }
