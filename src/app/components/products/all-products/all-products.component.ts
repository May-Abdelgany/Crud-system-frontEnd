import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  allProducts: any[] = [];
  message: string = '';
  constructor(private _ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    let key;
    this._ProductsService.searchWord.subscribe((res) => {
      key = res;
      if (!key) {
        this._ProductsService.getAllProducts().subscribe((res) => {
          if (res.message == 'Done') {
            this.allProducts = res.result;
            this.message = '';
          }
        });
      } else {
        this._ProductsService.search(key).subscribe((res) => {
          if (res.message == 'Done') {
            console.log(res.result.length);
            if (res.result.length) {
              this.allProducts = res.result;
            } else {
              this.allProducts = res.result;
              this.message = "don't have any product with this name";
            }
          }
        });
      }
    });
  }
}
