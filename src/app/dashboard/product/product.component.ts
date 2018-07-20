import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products: Product[];
  constructor() { }

  ngOnInit() {
    this.products= [{
          "productName": "samsung",
          "description": " enhanced featured mobile",
          "dateOfManufacture": "03-04-2018",
          "dateOfExpiry": "03-04-2018",
          "price" : 100,
          "inventory": 100
        },
      {

          "productName": "nokia",
          "description": "connecting everywhere",
          "dateOfManufacture": "03-04-2018",
          "dateOfExpiry": "03-04-2018",
          "price" : 100,
          "inventory": 100
      },
      {

          "productName": "micromax",
          "description": "nothing like anything",
          "dateOfManufacture": "03-04-2018",
          "dateOfExpiry": "03-04-2018",
          "price" : 100,
          "inventory": 100
      },{
            "productName": "samsung",
            "description": " enhanced featured mobile",
            "dateOfManufacture": "03-04-2018",
            "dateOfExpiry": "03-04-2018",
            "price" : 100,
            "inventory": 100
          },
        {

            "productName": "nokia",
            "description": "connecting everywhere",
            "dateOfManufacture": "03-04-2018",
            "dateOfExpiry": "03-04-2018",
            "price" : 100,
            "inventory": 100
        },
        {

            "productName": "micromax",
            "description": "nothing like anything",
            "dateOfManufacture": "03-04-2018",
            "dateOfExpiry": "03-04-2018",
            "price" : 100,
            "inventory": 100
        },{
              "productName": "samsung",
              "description": " enhanced featured mobile",
              "dateOfManufacture": "03-04-2018",
              "dateOfExpiry": "03-04-2018",
              "price" : 100,
              "inventory": 100
            },
          {

              "productName": "nokia",
              "description": "connecting everywhere",
              "dateOfManufacture": "03-04-2018",
              "dateOfExpiry": "03-04-2018",
              "price" : 100,
              "inventory": 100
          },
          {

              "productName": "micromax",
              "description": "nothing like anything",
              "dateOfManufacture": "03-04-2018",
              "dateOfExpiry": "03-04-2018",
              "price" : 100,
              "inventory": 100
          }];
  }

}
