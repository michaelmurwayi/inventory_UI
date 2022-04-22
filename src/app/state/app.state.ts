import { Injectable } from "@angular/core";
import { State, StateContext, StateToken, Selector, Action } from "@ngxs/store";
import { AppStateModel } from "./app.model";
import { GetAllStocks, GetTotalStocks } from "./app.actions";
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
            { "product_name": "product" },
            {"product_name": "product"},
            { "product_name": "product"},
            {"product_name": "product"},
            {"product_name": "product"},

        ],
        isLoading: false,
        errors:[],
        appStack: [],
        totalStock: 0,
        totalProducts: 0,
        shells: 0,
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
        this.stockService.getStocks().subscribe((response: ApiResponse) => {
            ctx.patchState({
                stock: response.data,
                totalProducts: response.data.length,
            });

        });
}
    @Action(GetTotalStocks)
    getTotalStock(ctx: StateContext<AppStateModel>) { 
        let totalStock = 0;
        let totalProducts = 0;
        let shells = 0;
        let empties = 0;
        
        const state = ctx.getState();
        console.log(state , 'state');
        // ctx.getState().stock.forEach(stock => {
        //     totalStock += stock.stock;
        //     totalProducts += 1;
        //     if(stock.product_name === 'shell'){
        //         shells += 1;
        //     }
        //     if(stock.product_name === 'empty'){
        //         empties += 1;
        //     }
        // });
        ctx.patchState({
            totalStock: totalStock,
            totalProducts: totalProducts,
            shells: shells,
            empties: empties,
        });
    }
    
    @Selector()
    static getStocks(state: AppStateModel) {
        return state.stock;
        }
    @Selector()
    static getTotalStock(state: AppStateModel) {
        return state.totalStock;
    }
}

