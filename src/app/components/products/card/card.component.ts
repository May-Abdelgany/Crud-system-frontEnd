import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() allProducts: any[] = [];
  @Input() inMyProducts: boolean = false;
  product: any = {};
  message: string = '';
  constructor(
    private _ProductsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  getProduct(id: number) {
    this._ProductsService.getProduct(id).subscribe((res) => {
      if (res.message == 'Done') {
        this.product = res.result[0];
      }
    });
  }
  deleteProduct(id: number) {
    const user_id = localStorage.getItem('user_id');
    this._ProductsService.deleteProduct(id, user_id).subscribe((res) => {
      if (res.message == 'Done') {
        this.message = 'Delete successfuly';
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        location.reload();
      }
    });
  }
}
