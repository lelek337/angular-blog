import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { adminAuthReducer, ADMIN_AUTH_FEATURE_NAME } from './store/admin-auth.reducer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AdminAuthEffects } from './store/admin-aurh.effects';
import { JwtModule } from '@auth0/angular-jwt';
import { AdminAuthInterceptor } from './interceptors/admin-auth.interceptor';
import { initAdminAuth } from './store/admin-auth.actions';

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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, // Injection Token
      useClass: AdminAuthInterceptor, // класс интерсептора SPI
      multi: true // мы внедряем массив
    },
  ]
})
export class AdminAuthStoreModule {
  constructor(store$: Store) {
    store$.dispatch(initAdminAuth());
  }
}
