import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { ProductComponent } from "../components/product/product.component";
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { EditPopupComponent } from "../components/edit-popup/edit-popup.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule, EditPopupComponent, EditPopupComponent, ButtonModule],
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

  displayEditPopup: boolean = false;
  displayAddPopup: boolean = false;

  toggleEditPopup(product: Product) {
    this.selectedProduct = product;
    this.displayEditPopup = true;
  }

  toggleDeletePopup(product: Product) {
    if (!product.id) {
      return;
    }
    this.deleteProduct(product.id);
  }

  toggleAddPopup() {
    this.displayAddPopup = true;
  }

  selectedProduct: Product = {
    id: 0,
    name: '',
    image: '',
    price: '',
    rating: 0,
  }

  onConfirmEdit(product: Product) {
    if (!this.selectedProduct.id) {
      return;
    }

    this.editProduct(product, this.selectedProduct.id); //(?? 0); if it exsists it will be used if not setting the id to 0
    this.displayEditPopup = false;
  }

  onConfirmAdd(product: Product) {
    this.addProduct(product);
    this.displayAddPopup = false;
  }

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
      .subscribe({
        next: (data: Products) => {
          this.products = data.items;
          this.totalRecords = data.total;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  // Edit product
  editProduct(product: Product, id: number) {
    // console.log(product, "Edit");
    this.productsService
    .editProduct(`http://localhost:3000/clothes/${id}`, product).subscribe({
        // dealing with data if successful
        next: (data) => {
          console.log(data);
          this.fetchProducts(0, this.rows);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  deleteProduct(id: number) {
    // console.log(product, "delete");
    this.productsService
      .deleteProduct(`http://localhost:3000/clothes/${id}`)
      .subscribe({
        // dealing with data if successful
        next: (data) => {
          console.log(data);
          this.fetchProducts(0, this.rows);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  addProduct(product: Product) {
    // console.log(product, "add");
    this.productsService.addProduct(`http://localhost:3000/clothes`, product).subscribe(
      {
        // dealing with data if successful
        next: (data) => {
          console.log(data);
          this.fetchProducts(0, this.rows);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
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
