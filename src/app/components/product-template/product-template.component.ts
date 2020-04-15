import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../interfaces/IProduct";

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent implements OnInit {

  @Input() data: IProduct;
  @Output() onBuyNow = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public buyNow() {
    this.onBuyNow.emit( this.data._id );
  }

}
