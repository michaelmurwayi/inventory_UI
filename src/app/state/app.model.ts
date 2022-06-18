export interface AppStateModel {
    appName: string;
    stocks?: Array<any>;
    cart?: Array<any>;
    isLoading: boolean;
    errors: Array<any>;
    appStack: Array<any>;
    totalStock: number;
    totalProducts: number;
    shells: number;
    empties:number;
    token: string;
}