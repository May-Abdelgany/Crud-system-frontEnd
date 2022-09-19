import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  @Input() myProduct: any = {};
  @Input() displayButton: boolean = false;
  product: FormGroup = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.maxLength(30), Validators.minLength(5)],
    ],
    description: [
      '',
      [Validators.required, Validators.maxLength(300), Validators.minLength(5)],
    ],
    image: [
      '',
      [Validators.required, Validators.maxLength(500), Validators.minLength(5)],
    ],
    Price: [, [Validators.required]],
    user_id: localStorage.getItem('user_id'),
  });
  constructor(
    private fb: FormBuilder,
    private _ProductsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.putData();
    }, 1000);
  }
  add(data: any) {
    console.log(data)
    this._ProductsService.addProduct(data).subscribe((res) => {
      if (res.message == 'Done') {
        this.router.navigate(['/myProducts']);
      }
    });
  }
  putData() {
    if (this.myProduct) {
      this.product.controls['title'].setValue(this.myProduct.title);
      this.product.controls['Price'].setValue(this.myProduct.price);
      this.product.controls['description'].setValue(this.myProduct.description);
      this.product.controls['image'].setValue(this.myProduct.image);
    }
  }
  update(data: any) {
    const id = this.myProduct.p_id;
    this._ProductsService.updateProduct(id, data).subscribe((res) => {
      if (res.message == 'Done') {
        this.router.navigate(['/myProducts']);
      }
    });
  }
}
