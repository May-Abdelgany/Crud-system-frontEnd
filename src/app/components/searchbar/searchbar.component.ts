import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  key: string = '';
  constructor(private _ProductsService: ProductsService) {}

  ngOnInit(): void {}
  search() {
    this._ProductsService.searchWord.next(this.key);
  }
}
