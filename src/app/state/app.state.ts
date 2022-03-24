import { Injectable } from "@angular/core";
import { State, StateContext, StateToken, Selector, Action } from '@ngrx/store';
import { AppStateModel } from "./app.model";

const APP_STATE_TOKEN = new StateToken<AppStateModel>('appState');

@State<AppStateModel>({
    name: APP_STATE_TOKEN,
    default:{
        appName: 'Stock Management',
        stock: [],
        isLoading: false,
        errors: [],
        appStack: [],
        totalStock: 0,
        empties: 0,
    },
});

@Injectable()
export class AppState{}