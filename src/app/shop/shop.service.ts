import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../type/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  getAllProducts(searchValue: string): Observable<Product[]> {
    const httpParams = new HttpParams({fromObject: { search: searchValue}})
    return this.http.get<Product[]>(`${environment.API_URL_DEV}/products`, { params: httpParams});
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.API_URL_DEV}/products/${id}`);
  }

  createProduct(body: Product): Observable<Product> {
    return this.http.post<Product>(
      `${environment.API_URL_DEV}/products/create`,
      body
    );
  }

  updateProduct(id: number, body: Product): Observable<Product> {
    return this.http.put<Product>(
      `${environment.API_URL_DEV}/products/${id}`,
      body
    );
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(
      `${environment.API_URL_DEV}/products/${id}`
    );
  }
}
