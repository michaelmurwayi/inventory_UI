import { Injectable } from "@angular/core";
import { State, StateContext, StateToken, Selector, Action } from "@ngxs/store";
import { AppStateModel } from "./app.model";
import { GetAllStocks } from "./app.actions";
import { ApiResponse } from "../models/api.model/api.response";
import { StockService } from "../services/stock.service";

const APP_STATE_TOKEN = new StateToken<AppStateModel>('appState');

@State<AppStateModel>({
    name: APP_STATE_TOKEN,
    defaults:{
        appName: "Stock Management",
        stock: [
            {"product_name": "product"},
            { "product_name": "product"},
            {"product_name": "product"},
            { "product_name": "product"},
            {"product_name": "product"},
            { "product_name": "product"},
            {"product_name": "product"},
            {"product_name": "product"},

        ],
        isLoading: false,
        errors:[],
        appStack: [],
        totalStock: 0,
        empties: 0,
        token:'',

    },
})


@Injectable()
export class AppState{
    
    constructor(private stockService: StockService){}

    private pushToStack(ctx: StateContext<AppStateModel>, value: any) {
        ctx.patchState({
            appStack: [...ctx.getState().appStack, value]
        })
    }
    
    @Action(GetAllStocks)
    getAllStock(ctx: StateContext<AppStateModel>) {
        console.log("we are here");
        this.stockService.getStocks().subscribe((response: ApiResponse) => {
            ctx.patchState({
                stock: response.data,
                totalStock: response.data.length,
            });

    });


    
}

@Selector()
static getStocks(state: AppStateModel) {
    return state.stock;
    }
}