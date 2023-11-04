import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'description', content:'Каталог товаров компании «Талисман». Выгодные цены на спецодежду от производителя. Доставка по Нижнему Новгороду и области'},
      {name: 'keywords', content:'спецодежда каталог, спецодежда нижний новгород каталог, спецодежда каталог товаров, спецодежда нижний новгород каталог товаров, спецодежда каталог цены, спецодежда сайт каталог, спецодежда каталог товаров цены, спецодежда каталог цены нижний новгород, спецодежда нижний новгород каталог товаров цены'},
    ]);
    this.setTitle('')
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle)
  }
}
