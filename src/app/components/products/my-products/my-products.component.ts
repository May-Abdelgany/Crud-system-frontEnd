import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../services/products.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css'],
})
export class MyProductsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}
  myProducts: any[] = [];
  message: string = '';
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    const id = localStorage.getItem('user_id');
    let key;
    this._ProductsService.searchWord.subscribe((res) => {
      key = res;
      if (!key) {
        this._ProductsService.getMyProducts(id).subscribe((res) => {
          if (res.message == 'Done') {
            if (res.result.length) {
              this.myProducts = res.result;
              this.message = '';
            } else {
              this.message = "you don't have any product in store";
            }
          }
        });
      } else {
        this._ProductsService.mySearch(id, key).subscribe((res) => {
          if (res.message == 'Done') {
            console.log(res.result.length);
            if (res.result.length) {
              this.myProducts = res.result;
            } else {
              this.myProducts = res.result;
              this.message = "don't have any product with this name";
            }
          }
        });
      }
    });
  }
}
