import { Injectable } from "@angular/core";
import { State, StateContext, StateToken, Selector, Action } from "@ngxs/store";
import { AppStateModel } from "./app.model";
import { GetAllStocks, GetTotalStocks } from "./app.actions";
import { ApiResponse } from "../models/api.model/api.response";
import { StockService } from "../services/stock.service";
import { Product } from "../models/Product";
const APP_STATE_TOKEN = new StateToken<AppStateModel>('appState');

@State<AppStateModel>({
    name: APP_STATE_TOKEN,
    defaults:{
        appName: "Stock Management",
        stocks:  [
            {
                "id":1,
                "product_name": "200ml",
                "product_price": 23.00,
                "quantity": 30
            },
            {
                "id":2,
                "product_name": "300ml",
                "product_price": 30.00,
                "quantity": 319
            },
            {
                "id":1,
                "product_name": "500ml",
                "product_price": 40.00,
                "quantity": 269
            },
            {
                "id":1,
                "product_name": "1ltr glass",
                "product_price": 80.00,
                "quantity": 30
            },
            {
                "id":1,
                "product_name": "200ml",
                "product_price": 23.00,
                "quantity": 30
            },
            {
                "id":2,
                "product_name": "300ml",
                "product_price": 30.00,
                "quantity": 319
            },
            {
                "id":1,
                "product_name": "500ml",
                "product_price": 40.00,
                "quantity": 269
            },
            {
                "id":1,
                "product_name": "1ltr glass",
                "product_price": 80.00,
                "quantity": 30
            },
            {
                "id":1,
                "product_name": "200ml",
                "product_price": 23.00,
                "quantity": 30
            },
            {
                "id":2,
                "product_name": "300ml",
                "product_price": 30.00,
                "quantity": 319
            },
            {
                "id":1,
                "product_name": "500ml",
                "product_price": 40.00,
                "quantity": 269
            },
            {
                "id":1,
                "product_name": "1ltr glass",
                "product_price": 80.00,
                "quantity": 30
            }
        ],
        cart: [
            {
                "product": "200ml",
                "quantity": 1,
                "price": 23.00
            },
            {
                "product": "300ml",
                "quantity": 2,
                "price": 30.00
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

    constructor(){}


    @Selector()
    static getStocks(state: AppStateModel) {
        return state.stocks;
        }

    @Selector()
    static getCart(state: AppStateModel) {
        console.log("cart", state.cart)
        return state.cart;

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

