import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from "rxjs";
import { ApiResponse } from '../models/api.model/api.response';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class StockService {

  constructor(private http: HttpClient) { }
  
  getStocks(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>("https://tendaspace.herokuapp.com/api/v1/" + "/stocks").pipe(
        retry(3),
    )

}

}
