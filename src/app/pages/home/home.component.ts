import { Component, OnInit } from '@angular/core';
import jsonData from "./top";
import {IProduct} from "../../interfaces/IProduct";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: IProduct[] = jsonData;

  constructor() { }

  ngOnInit(): void {
  }

}
