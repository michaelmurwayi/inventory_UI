export interface AppStateModel {
    appName: string;
    stock?: Array<any>;
    isLoading: boolean;
    errors: Array<any>;
    appStack: Array<any>;
    totalStock:number;
    empties:number;
    token: string;
}