import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule], // we have to import what we are going to use here
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
  // This is how we would emit
  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
    this.productOutput.emit(this.product)
  }
}
