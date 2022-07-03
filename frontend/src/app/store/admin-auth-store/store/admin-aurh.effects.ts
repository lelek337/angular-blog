import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AdminAuthService } from "../servises/admin-auth.service";
import { login, loginFailed, loginSuccess } from "./admin-auth.actions";

@Injectable()
export class AdminAuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(action => this.adminAuthservice.login({
      login: action.login,
      password: action.password
    }).pipe(
      map(loginSuccessData => loginSuccess(loginSuccessData)),
      catchError(
        error => of(loginFailed({
            serverError: error.message
          }))
        )
      )
    )
  ))

  constructor(
    private actions$: Actions,
    private adminAuthservice: AdminAuthService
  ) {}
}
