import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../type/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}
  public api_url  = "https://api-lojinha.onrender.com";

  getAllProducts(searchValue: string): Observable<Product[]> {
    const httpParams = new HttpParams({fromObject: { search: searchValue}})
    return this.http.get<Product[]>(`${this.api_url}/products`, { params: httpParams});
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api_url}/products/${id}`);
  }

  createProduct(body: Product): Observable<Product> {
    return this.http.post<Product>(
      `${this.api_url}/products/create`,
      body
    );
  }

  updateProduct(id: number, body: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.api_url}/products/${id}`,
      body
    );
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(
      `${this.api_url}/products/${id}`
    );
  }
}
