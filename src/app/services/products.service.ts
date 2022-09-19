import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public searchWord = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/allProducts');
  }
  getProduct(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/product/${id}`);
  }
  getMyProducts(id: any): Observable<any> {
    return this.http.get(`http://localhost:3000/myProduct/${id}`);
  }
  deleteProduct(id: number, user_id: any): Observable<any> {
    return this.http.delete(
      `http://localhost:3000/deleteProduct/${id}?user_id=${user_id}`
    );
  }
  addProduct(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/addProduct`, data);
  }
  updateProduct(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/updateProduct/${id}`, data);
  }
  search(key: string): Observable<any> {
    return this.http.get(`http://localhost:3000/productsStartWith?key=${key}`);
  }
  mySearch(id: any, key: string): Observable<any> {
    return this.http.get(
      `http://localhost:3000/myProductsStartWith/${id}?key=${key}`
    );
  }
}
