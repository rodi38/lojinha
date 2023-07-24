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
    return this.http.get<Product[]>(`${environment.API_URL}/products`);
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${environment.API_URL}/products/${id}`);

  }

  createProduct(body: Product): Observable<Product> {
    return this.http.post<Product>(
      `${environment.API_URL}/products/create`,
      body
    );
  }

  updateProduct(body: Product): Observable<Product> {
    const productId = body.id;
    return this.http.put<Product>(
      `${environment.API_URL}/products/${productId}`,
      body
    );
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${environment.API_URL}/products/${id}`);
  }
}
