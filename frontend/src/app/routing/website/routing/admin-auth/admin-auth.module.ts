import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminLoginBlockModule } from 'src/app/view/admin-login-block/admin-login-block.module';
import { AdminAuthEffects } from 'src/app/store/admin-auth-store/store/admin-aurh.effects';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AdminLoginBlockModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginPageComponent
      }
    ]),
  ],
  providers: [AdminAuthEffects]
})
export class AdminAuthModule { }
