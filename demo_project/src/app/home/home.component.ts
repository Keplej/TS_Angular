import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { ProductComponent } from "../components/product/product.component";
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
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

  totalRecords: number = 0;
  rows: number = 5;

  onProductOutput(product: Product) {
    console.log(product, "Output");
  }

  // When we change the page and event will be emitted to our custom function so we fetch the page and rows
  onPageChange(event:any) {
    this.fetchProducts(event.page, event.rows);
  }
  

  fetchProducts(page: number, perPage: number) {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe((prodcuts: Products) => {
        this.products = prodcuts.items;
        this.totalRecords = prodcuts.total;
      });
  }

  ngOnInit() {
    // called when inilized component
    // this.productsService
    //   .getProducts('http://localhost:3000/clothes', {page: 0, perPage:5})
    //   .subscribe((products: Products) => {
    //     // console.log(products.items);
    //     this.products = products.items;
    // })

    this.fetchProducts(0, this.rows); // this is bascially selecting from fetchProducts and we input the page and perPage. So page is 0 and perPage is 5
  }
}
