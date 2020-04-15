import { Component, OnInit } from '@angular/core';
import jsonData from "./data";
import {IProduct} from "../../interfaces/IProduct";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: IProduct[] = jsonData;

  constructor() { }

  ngOnInit(): void {
  }

  public showId(productId) {
    alert("Buy now: " + productId);
  }

}
