// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

// module
import { NameListService } from '../services/name-list.service';
import * as NameList from '../actions/index';
import { Name } from '../models/sample.model';

@Injectable()
export class SampleEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType<NameList.InitAction>(NameList.INIT)
    .map(action => action.payload)
    .switchMap(() =>
      this.nameListService.getNames().map((names: Name[]) => new NameList.InitAction(names))
    );

  @Effect() add$: Observable<Action> = this.actions$
    .ofType<NameList.AddAction>(NameList.ADD)
    .map(action => {
      let name: Name = action.payload;
      // analytics
      this.nameListService.track(NameList.NAME_ADDED, {label: name.name});
      return new NameList.NameAddedAction(name);
    });

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private nameListService: NameListService
  ) { }
}
