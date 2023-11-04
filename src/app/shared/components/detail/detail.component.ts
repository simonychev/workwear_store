import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ActivatedRoute} from "@angular/router";
import {log} from "@nguniversal/builders/src/ssr-dev-server";

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product_id: string;
  constructor(private actRoute: ActivatedRoute) {
    this.product_id = this.actRoute.snapshot.params['id'];
  }

  catalog: ProductType = {
    id: 0,
    titleHeader: '',
    description: '',
    material: '',
    category: '',
    image: '',
    title: '',
    price: '',
    link: ''
  };
  ngOnInit() {
    this.catalog = (JSON.parse(localStorage.getItem('catalog')!))
  }
}
