import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./shared/layout/layout.component";
import {MainComponent} from "./views/main/main.component";
import {ContactComponent} from "./shared/components/contact/contact.component";
import {WorkwearComponent} from "./views/workwear/workwear.component";
import {WorkwearSummerComponent} from "./views/workwear/summer/workwear-summer.component";
import {DetailComponent} from "./shared/components/detail/detail.component";
import {WorkwearWinterComponent} from "./views/workwear/winter/workwear-winter.component";
import {GlovesComponent} from './views/gloves/gloves.component';
import {ShoesComponent} from "./views/shoes/shoes.component";
import {InventoryComponent} from "./views/inventory/inventory.component";
import {ShoesSummerComponent} from "./views/shoes/summer/shoes-summer.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, title: 'Оптовый магазин спецодежды и СИЗ в Нижнем Новгороде',
    children: [
      { path: '', component: MainComponent, title: 'Оптовый магазин спецодежды и СИЗ в Нижнем Новгороде' },
      { path: 'contact', component: ContactComponent, title: 'Контакты' },
      { path: 'workwear', component: WorkwearComponent, title: 'Спецодежда' },
      { path: 'workwear/summer-workwear', component: WorkwearSummerComponent, title: 'Спецодежда летняя' },
      { path: 'workwear/winter-workwear', component: WorkwearWinterComponent, title: 'Спецодежда зимняя' },
      { path: 'gloves', component: GlovesComponent, title: 'Защита для рук' },
      { path: 'shoes', component: ShoesComponent, title: 'Спецобувь' },
      { path: 'shoes/summer-shoes', component: ShoesSummerComponent, title: 'Спецобувь летняя', },
      { path: 'inventory', component: InventoryComponent, title: 'Хозинвентарь' },
      { path: 'workwear/summer-workwear/detail/:id', component: DetailComponent },
      { path: 'workwear/winter-workwear/detail/:id', component: DetailComponent },
      { path: 'shoes/summer-shoes/detail/:id', component: DetailComponent },
      { path: 'gloves/detail/:id', component: DetailComponent },
      { path: 'inventory/detail/:id', component: DetailComponent },
      { path: 'shoes/detail/:id', component: DetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'top', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
