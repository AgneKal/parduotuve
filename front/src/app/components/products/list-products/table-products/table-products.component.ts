import { Component } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../models/product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.css'
})
export class TableProductsComponent {
  public products:Product[] = [];
  
  constructor(private productsService: ProductsService){
    productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
