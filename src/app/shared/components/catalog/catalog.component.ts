import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  constructor(private router: Router) {
  }

@Input() catalog: ProductType = {
    id: 0,
    titleHeader: '',
    description: '',
    material: '',
    category: '',
    image: '',
    title: '',
    price: '',
    link: ''
}

  openDetail(title: string, productId: number) {
    localStorage.clear();
    localStorage.setItem('catalog', JSON.stringify(this.catalog));
    if (title === 'Спецодежда' || title === 'Спецодежда летняя' || title === 'Спецодежда зимняя' || title === 'Спецобувь' || title === 'Спецобувь летняя' || title === 'Защита для рук' || title === 'Хозинвентарь') {
      this.router.navigate([this.catalog.link]);
    } else {
      this.router.navigate([this.catalog.link + '/detail/', productId]);
    }
  }
}
