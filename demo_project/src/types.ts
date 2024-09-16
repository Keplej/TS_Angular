import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

// The way our products witll be returned in the backend
// app.get("/clothes", (req, res)
export interface Products {
    items: Product[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
}

// app.post("/clothes", (req, res)
export interface Product {
    id?: number;
    price: string;
    name: string;
    image: string;
    rating: number;
}

// This is a simple interface, it can take in a page param and a perPage param
export interface PaginationParams {
    [key: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
    perPage: number; 
}