import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule, ButtonModule, ConfirmPopupModule], // we have to import what we are going to use here
  providers: [ConfirmationService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private confirmationService: ConfirmationService) {}

  // View Check, on the html we added a #deleteButton and thats how it finds it
  @ViewChild('deleteButton') deleteButton: any;

  @Input() product!: Product;
  // This is how we would emit
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

  editProduct() {
    this.edit.emit(this.product);
  }


  confirmDelete() {
    this.confirmationService.confirm({
      target: this.deleteButton.nativeElement,
      message: "Are you sure that you want to delete this product?",
      accept: () => {
        this.deleteProduct();
      },
    });
  }

  deleteProduct() {
    this.delete.emit(this.product);
  }

  ngOnInit() {
    
  }
}
