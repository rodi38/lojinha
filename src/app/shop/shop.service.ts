import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../type/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.API_URL_DEV}/products`);
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
    // const productId = body.id;
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
