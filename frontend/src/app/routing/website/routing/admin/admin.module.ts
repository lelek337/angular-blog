import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminFooterBlockModule } from 'src/app/view/admin-footer-block/admin-footer-block.module';
import { AdminHeaderBlockModule } from 'src/app/view/admin-header-block/admin-header-block.module';
import { AdminNavBlockModule } from 'src/app/view/admin-nav-block/admin-nav-block.module';

@NgModule({
  declarations: [
    AdminPageComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPageComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'dashboard'
          },
          {
            path: 'dashboard',
            loadChildren: () => import('./routing/dashboard/dashboard.module'
            )
            .then(
              module => module.DashboardModule
              )
          },
          {
            path: 'grid/:name/:entity',
            loadChildren: () => import('./routing/grid/grid.module'
            )
            .then(
              module => module.GridModule
              )
          },
          {
            path: 'form/:name/:entity',
            loadChildren: () => import('./routing/form/form.module'
            )
            .then(
              module => module.FormModule
              )
          }
        ]
      }
    ]),
    AdminFooterBlockModule,
    AdminHeaderBlockModule,
    AdminNavBlockModule,
  ]
})
export class AdminModule { }
