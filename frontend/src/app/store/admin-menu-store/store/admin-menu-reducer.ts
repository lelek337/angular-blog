
import { createReducer, on } from "@ngrx/store";;
import { logoutSuccess } from "../../admin-auth-store/store/admin-auth.actions";
import { initMenu, initMenuFailed, initMenuSuccess } from "./admin-menu-action";

export const ADMIN_MENU_FEATURE_NAME = 'admin-auth';

export interface NestedTreeNode {
  name: string;
  href?: string;
  icon?: string;
  children?: NestedTreeNode[];
}

export interface AdminMenuState {
  loading: boolean;
  loaded: boolean;
  serverError?: string;
  data: NestedTreeNode[];
}

const initialState: AdminMenuState = {
  loaded: true,
  loading: false,
  serverError: '',
  data: []
};

export const adminMenuReducer = createReducer(
  initialState,
  on(initMenu, state => state.loaded ? state : {
    ...state,
    loading: true
  }),
  on(initMenuSuccess, (state, action) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError: undefined,
    data: action.data
  })),
  on(initMenuFailed, (state, action) => ({
    ...state,
    loading: false,
    loaded: true,
    serverError: action.serverError,
    data: []
  })),
  on(logoutSuccess, () => initialState)
  );
