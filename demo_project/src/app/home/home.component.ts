import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // we want to create a service that will be accessed by multiple components
  // constructor allows us to declare the services we are going to be injecting before the inilization happens
  constructor(
    private productsService: ProductsService
  ) {}
  
  ngOnInit() {
    // called when inilized component
    this.productsService
      .getProducts('http://localhost:3000/clothes', {page: 0, perPage:5})
      .subscribe((products: Products) => {
        console.log(products.items);
    })
  }
}
