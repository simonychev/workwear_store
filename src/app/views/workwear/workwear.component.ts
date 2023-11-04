import {Component} from '@angular/core';

@Component({
  selector: 'workwear',
  templateUrl: './workwear.component.html',
  styleUrls: ['./workwear.component.scss']
})
export class WorkwearComponent {
  workwears = [
    {
      category: '',
      image: 'workwear/summer/27.jpg',
      title: 'Спецодежда летняя',
      price: 'от 360 руб.',
      link: '/workwear/summer-workwear'
    },
    {
      category: '',
      image: 'workwear/winter/9.webp',
      title: 'Спецодежда зимняя',
      price: 'от 680 руб.',
      link: '/workwear/winter-workwear'
    },
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
