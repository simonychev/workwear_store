import {Component} from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent {

  workwears = [
    {
      category: '',
      image: 'shoes/summer/22.jpg',
      title: 'Спецобувь летняя',
      price: 'от 600 руб.',
      link: '/shoes/summer-shoes'
    },
    // {
    //   category: '',
    //   image: 'workwear/winter/9.webp',
    //   title: 'Спецодежда зимняя',
    //   price: 'от 680 руб.',
    //   link: '/workwear/winter-workwear'
    // },
    // {
    //   category: '',
    //   image: 'hands.webp',
    //   title: 'Спецодежда влагозащитная',
    //   price: 'от 1500 руб.',
    //   link: '/workwear'
    // },
    // {
    //   category: '',
    //   image: 'hands.webp',
    //   title: 'Спецодежда сигнальная',
    //   price: 'от 1500 руб.',
    //   link: '/workwear'
    // },
    // {
    //   category: '',
    //   image: 'hands.webp',
    //   title: 'Спецодежда для сварщика',
    //   price: 'от 1500 руб.',
    //   link: '/workwear'
    // },
    // {
    //   category: '',
    //   image: 'hands.webp',
    //   title: 'Униформа персонала',
    //   price: 'от 1500 руб.',
    //   link: '/workwear'
    // },
    // {
    //   category: '',
    //   image: 'hands.webp',
    //   title: 'Медицинская одежда',
    //   price: 'от 1500 руб.',
    //   link: '/workwear'
    // },
  ]
}
