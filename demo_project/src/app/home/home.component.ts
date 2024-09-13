import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { ProductComponent } from "../components/product/product.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // we want to create a service that will be accessed by multiple components
  // constructor allows us to declare the services we are going to be injecting before the inilization happens
  constructor(
    private productsService: ProductsService
  ) {}
  
  products: Product[] = [];

  onProductOutput(product: Product) {
    console.log(product, "Output");
  }

  ngOnInit() {
    // called when inilized component
    this.productsService
      .getProducts('http://localhost:3000/clothes', {page: 0, perPage:5})
      .subscribe((products: Products) => {
        // console.log(products.items);
        this.products = products.items;
    })
  }
}
