import { Action } from '@ngrx/store';
import { type } from '../../core/utils/index';
import { Name } from '../models/sample.model';

export const CATEGORY: string = 'NameList';

export const INIT =         `${CATEGORY} Init`;
export const INITIALIZED =  `${CATEGORY} Initialized`;
export const INIT_FAILED =  `${CATEGORY} Init Failed`;
export const ADD =          `${CATEGORY} Add`;
export const NAME_ADDED =   `${CATEGORY} Name Added`;

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitAction implements Action {
  readonly type = INIT;
  constructor(public payload: Name[]) {}
}

export class InitializedAction implements Action {
  readonly type = INITIALIZED;
  constructor(public payload: Name[]) { }
}

export class InitFailedAction implements Action {
  readonly type = INIT_FAILED;
  payload: string = null;
}

export class AddAction implements Action {
  readonly type = ADD;
  constructor(public payload: Name) { }
}

export class NameAddedAction implements Action {
  readonly type = NAME_ADDED;
  constructor(public payload: Name) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = InitAction
  | InitializedAction
  | InitFailedAction
  | AddAction
  | NameAddedAction;

