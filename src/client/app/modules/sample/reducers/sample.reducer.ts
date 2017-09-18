import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as NameList from '../actions/index';
import { Name } from '../models/sample.model';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface ISampleState extends EntityState<Name> {
  name: string | null;
}

/**
 * createEntityAdapter creates many an object of helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export const adapter: EntityAdapter<Name> = createEntityAdapter<Name>({
  selectId: (name: Name) => name.name,
  sortComparer: false,
});

/** getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
*/
export const initialState: ISampleState = adapter.getInitialState({
  name: {name: 'hero'},
});

export function reducer(
  state = initialState,
  // could support multiple state actions via union type here
  // ie: NameList.Actions | Other.Actions
  // the seed's example just has one set of actions: NameList.Actions
  action: NameList.Actions
): ISampleState {
  switch (action.type) {
    case NameList.INITIALIZED:
      return (<any>Object).assign({}, state, {
        names: action.payload
      });

    case NameList.NAME_ADDED:
      return (<any>Object).assign({}, state, {
        names: action.payload
      });

    default:
      return state;
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getNames = (state: ISampleState) => state.name;
