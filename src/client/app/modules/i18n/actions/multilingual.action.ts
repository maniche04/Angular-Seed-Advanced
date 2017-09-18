// libs
import { Action } from '@ngrx/store';

// app
import { type } from '../../core/utils/type';

// module
import { CATEGORY } from '../common/category.common';

export const CHANGE = `[${CATEGORY}] Change`;
export const LANG_CHANGED = `[${CATEGORY}] Lang Changed`;
export const LANG_UNSUPPORTED = `[${CATEGORY}] Lang Unsupported`;

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class ChangeAction implements Action {
  readonly type = CHANGE;

  constructor(public payload: string) { }
}

export class LangChangedAction implements Action {
  readonly type = LANG_CHANGED;

  constructor(public payload: string) { }
}

export class LangUnsupportedAction implements Action {
  readonly type = LANG_UNSUPPORTED;

  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = ChangeAction
  | LangChangedAction
  | LangUnsupportedAction;
