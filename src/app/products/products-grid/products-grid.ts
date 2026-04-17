import { MatIconModule } from '@angular/material/icon';
import { ProductsItem } from '../products-item/products-item';
import { Product } from './../product';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-products-grid',
  imports: [ProductsItem, MatIconModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Product A',
      description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
      price: 199.99,
      originalPrice: 249.99,
    },
    {
      id: 2,
      name: 'Product B',
      description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.',
      price: 299.99,
    },
    {
      id: 3,
      name: 'Product C',
      description: 'Compact speaker with powerful bass and 12-hour battery life.',
      price: 79.99,
      originalPrice: 99.99
    }
  ])
}
