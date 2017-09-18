// module
import * as MultiLanguage from '../actions/multilingual.action';
import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Language } from '../models/multilingual.model';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface IMultilingualState extends EntityState<Language> {
  lang: string | null;
}

/**
* createEntityAdapter creates many an object of helper
* functions for single or multiple operations
* against the dictionary of records. The configuration
* object takes a record id selector function and
* a sortComparer option which is set to a compare
* function if the records are to be sorted.
*/
export const adapter: EntityAdapter<Language> = createEntityAdapter<Language>({
 selectId: (language: Language) => language.lang
});

/** getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
*/
export const initialState: IMultilingualState = adapter.getInitialState({
  lang: 'en',
  sortComparer: false,
});


export function reducer(
    state = initialState,
    action: MultiLanguage.Actions
): IMultilingualState {
  switch (action.type) {
    case MultiLanguage.LANG_CHANGED:
      if (state.lang !== action.payload)
        return (<any>Object).assign({}, state, {
            lang: action.payload
          });
      return state;
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

export const getLang = (state: IMultilingualState) => state.lang;
