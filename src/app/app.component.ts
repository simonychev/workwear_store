import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import { CanonicalService } from './shared/services/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private metaTagService: Meta,
              private canonicalService: CanonicalService) {}
  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'спецодежда каталог, спецодежда нижний новгород каталог, спецодежда каталог товаров, спецодежда нижний новгород каталог товаров, спецодежда каталог цены, спецодежда сайт каталог, спецодежда каталог товаров цены, спецодежда каталог цены нижний новгород, спецодежда нижний новгород каталог товаров цены'},
      { name: 'description', content: 'Каталог товаров компании «Талисман». Выгодные цены на спецодежду от производителя. Доставка по Нижнему Новгороду и области' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      { name: 'date', content: '2023-10-31', scheme: 'YYYY-MM-DD' },
    ]);
    this.canonicalService.setCanonicalURL();
  }
  title = 'talisman';
}
