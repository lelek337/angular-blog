import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { adminAuthReducer, ADMIN_AUTH_FEATURE_NAME } from './store/admin-auth.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AdminAuthEffects } from './store/admin-aurh.effects';
import { JwtModule } from '@auth0/angular-jwt';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: request => request as any
      }
    }),
    StoreModule.forFeature(
      ADMIN_AUTH_FEATURE_NAME,
      adminAuthReducer
    ),
    EffectsModule.forFeature([AdminAuthEffects])
  ]
})
export class AdminAuthStoreModule { }
