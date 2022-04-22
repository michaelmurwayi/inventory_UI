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
            {
                "product_name": "product",
                "Quantity": 100
            },
            {
                "product_name": "product",
                "Quantity": 100
            },
            {
                "product_name": "product",
                "Quantity": 100
            },
            {
                "product_name": "product",
                "Quantity": 100
            },
            {
                "product_name": "product",
                "Quantity": 100
            },
            {
                "product_name": "product",
                "Quantity": 100
            },
            {
                "product_name": "shell",
                "Quantity": 100
            },
            {
                "product_name": "Empties",
                "Quantity": 80
            },
            
            
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
        console.log(state.stock, 'state');
        
        state.stock && state.stock.forEach(stock => {
            if (stock.product_name === 'shell' || stock.product_name === 'Empties') { 
                totalStock = totalStock;
            } else {
                totalStock += stock.Quantity;
                totalProducts += 1;
            }
            if(stock.product_name === 'shell'){
                shells = stock.Quantity;
            }
            if(stock.product_name === 'Empties'){
                empties = stock.Quantity;
            }
        });
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
    
    @Selector()
    static getShells(state: AppStateModel) {
        return state.shells;
    }

    @Selector()
    static getEmpties(state: AppStateModel) {
        return state.empties;
    }
}

