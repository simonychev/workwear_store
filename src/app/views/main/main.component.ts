import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  banners = [
    {
      image: 'logotip.webp',
    },
    {
      image: 'krug.webp',
    },
    {
      image: 'banner-montazhnik.webp',
    },
    {
      image: 'cech.webp',
    },
    {
      image: 'proizvodstvo.webp',
    },
  ]

  catalogs = [
    {
      titleHeader: '',
      description: '',
      material: '',
      category: '',
      image: 'panam.webp',
      title: 'Спецодежда',
      price: 'от 360 руб.',
      link: '/workwear'
    },
    {
      titleHeader: '',
      description: '',
      material: '',
      category: '',
      image: 'anons.webp',
      title: 'Спецобувь',
      price: 'от 600 руб.',
      link: '/shoes'
    },
    {
      titleHeader: '',
      description: '',
      material: '',
      category: '',
      image: 'hands.webp',
      title: 'Защита для рук',
      price: 'от 18 руб.',
      link: '/gloves'
    },
    {
      titleHeader: '',
      description: '',
      material: '',
      category: '',
      image: 'inventory.webp',
      title: 'Хозинвентарь',
      price: 'от 54 руб.',
      link: '/inventory'
    },
    // {
    //   titleHeader: '',
    //   description: '',
    //   material: '',
    //   category: '',
    //   image: 'siz.webp',
    //   title: 'СИЗ',
    //   price: 'от 1500 руб.',
    //   link: '/'
    // },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    margin: 5,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false
  }

  customOptionsReviews: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    margin: 5,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      725: {
        items: 2
      },
      1110: {
        items: 3
      },
      1400: {
        items: 3
      }
    },
    nav: false
  }

  reviews = [
    {
      name: 'Юлия',
      image: 'review1.webp',
      text: 'Отличная компания, большое разнообразие товара, товар качественный и всегда в наличии, имеется доставка. Рекомендую как надежного поставщика Средств Индивидуальной Защиты.',
    },
    {
      name: 'Наталья',
      image: 'review2.webp',
      text: 'Заказывали спецодежду в компании Талисман. Были приятно удивлены, что цены ниже, даже с учетом доставки, чем у нашего действующего поставщика. Теперь будем постоянными клиентами!',
    },
    {
      name: 'Илья',
      image: 'review3.webp',
      text: 'Заказывали спецодежду в Талисмане,прекрасный ассортимент и очень приятные цены. Если нужна качественная спецодежда то только сюда!',
    },
    {
      name: 'Екатерина',
      image: 'review4.webp',
      text: 'Широкий ассортимент, цена-качество соотвествуют, специалисты помогут определиться с выбором, быстрая доставка. Рекомендую данную компанию.',
    },
    {
      name: 'Елена',
      image: 'review5.webp',
      text: 'С компанией "Талисман" работали впервые, очень довольны. Устроила цена, качество, все оформили быстро.',
    },
    {
      name: 'Марина',
      image: 'review6.webp',
      text: 'Отличная спец одежда, удобная заказывали на производство все остались довольны.',
    },
    {
      name: 'Станислав',
      image: 'review7.webp',
      text: 'Купил себе все нужное для походов на рыбалку: костюм, обувь. Каталог на сайте хороший. Выбор одежды и обуви большой, для всех сезонов. Сайт удобный, быстро все нашел.',
    },
  ]

}
