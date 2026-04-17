import { Component, input } from '@angular/core';
import { Product } from '../product';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-products-item',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './products-item.html',
  styleUrl: './products-item.scss',
})
export class ProductsItem {
  readonly product = input.required<Product>();
  readonly addBtnLabel = input('Add to Cart');
}
