import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-products.component.html',
  styleUrl: './update-products.component.css'
})
export class UpdateProductsComponent {

  public id?: number = 0;
  public name: string = '';
  public price: number = 0;

  constructor(private route:ActivatedRoute, private router:Router, private productsService: ProductsService){
    console.log(this.route.snapshot.params['id']);
    this.productsService.getProduct(this.route.snapshot.params['id']).subscribe((product) => {
      this.name = product.name;
      this.price = product.price;
      this.id = product.id;
    })
  }

  public productSubmit(form:NgForm) {
    this.productsService.updateProduct({id:this.id, ...form.form.value}).subscribe((data) => {
      this.router.navigate(['products', 'list']);
    })
  }
}
