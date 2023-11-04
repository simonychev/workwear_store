import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { MainComponent } from './views/main/main.component';
import {RouterModule} from "@angular/router";
import {CarouselModule} from "ngx-owl-carousel-o";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import { ContactComponent } from './shared/components/contact/contact.component';
import {MatMenuModule} from "@angular/material/menu";
import { CatalogComponent } from './shared/components/catalog/catalog.component';
import { WorkwearSummerComponent } from './views/workwear/summer/workwear-summer.component';
import { WorkwearComponent } from './views/workwear/workwear.component';
import { DetailComponent } from './shared/components/detail/detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { WorkwearWinterComponent } from './views/workwear/winter/workwear-winter.component';
import { GlovesComponent } from './views/gloves/gloves.component';
import { ShoesComponent } from './views/shoes/shoes.component';
import { InventoryComponent } from './views/inventory/inventory.component';
import { ShoesSummerComponent } from './views/shoes/summer/shoes-summer.component';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ContactComponent,
    CatalogComponent,
    WorkwearSummerComponent,
    WorkwearComponent,
    DetailComponent,
    WorkwearWinterComponent,
    GlovesComponent,
    ShoesComponent,
    InventoryComponent,
    ShoesSummerComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
