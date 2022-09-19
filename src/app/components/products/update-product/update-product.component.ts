import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  id: number = 0;
  product: any = {};
 
  constructor(
    private route: ActivatedRoute,
    private _ProductsService: ProductsService
  ) {}
  getId() {
    this.id = this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.getId();
    this._ProductsService.getProduct(this.id).subscribe((res) => {
      if (res.message == 'Done') {
        this.product = res.result[0];
      }
    });
  }
}
