import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  page: number = 0;
  pages: number[] = [];

  ngOnInit(): void {
    this.pages = [];
    for (let i = 1; i <= this.activeParams; i++) {
      this.pages.push(i);
    }
    this.activeParams = 1;
  }

  openPage(page: number) {
    this.activeParams = page;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    if (page !== 1) {
      this.inventory[this.page].content = this.inventory[page - 1].content;
    } else {
      this.inventory[this.page].content = this.inventoryArray
    }
  }

  inventoryArray = [
    {
      id: 1,
      titleHeader: 'Ветошь (цветной х/б трикотаж) до 40х60 см',
      description:
        'Легкая, прочная, безворсовая ткань, универсального назначения, отлично впитывает, идеально подходит для обработки поверхности под покраску' +
        '<li>Состав: 100% хлопок (сорочечная ткань, лоскут рубашек)</li>' +
        '<li>Размер: 40х60 см</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'inventory/1.jpg',
      title: 'Ветошь (цветной х/б трикотаж) до 40х60 см',
      price: '185 руб.',
      link: '/inventory'
    },
    {
      id: 2,
      titleHeader: 'Холстопрошивное полотно ХПП',
      description:
        'Нетканое полотно - это очень качественная техническая ткань. Это достаточно толстый нетканый материал. Благодаря своей рыхлой структуре холстопрошивное полотно хорошо теплоизолирует. ХПП представляет собой нетканый массив волокон, который скреплен через промежутки швами. Производство нетканого полотна начинается с измельчения текстильного сырья (хлопка), после этого пухообразную основу превращают в равномерный пласт при помощи раскатывания. Этот пласт в дальнейшем прошивается зигзагообразными строчками.' +
        '<li>Ширина нетканого полотна:153 см</li>' +
        '<li>Длина рулона холстопрошивного полотна: 50 метров</li>' +
        '<li>Состав нетканого полотна: изготавливается из первичного хлопка</li>' +
        '<li>Длина строчки холстопрошивного полотна: 2,5 мм, 5 мм. плотность хпп: 200 - 210 г/кв.м</li>' +
        '<li>Габариты: 36х36х160 см (для полотна шириной 153 см). Вес (ТУ):  16 кг. Объем (ТУ):  0,20 куб.м</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'inventory/2.jpg',
      title: 'Холстопрошивное полотно ХПП',
      price: '59 руб.',
      link: '/inventory'
    },
    {
      id: 3,
      titleHeader: 'Вафельное полотно',
      description:
        'Продукция из вафельной ткани находит широкое применение, например:' +
        '<li>В сфере обслуживания населения (отели, салоны красоты)</li>' +
        '<li>В объектах общественного питания (бары, кафе, рестораны)</li>' +
        '<li>В медицинских учреждениях (санатории, больницы)</li>' +
        '<li>В детских садах и школах</li>' +
        '<li>В автосервисе (мойки и станции технического обслуживания)</li>' +
        '<h3>Характеристики: </h3>' +
        '<li>Ткань: Хлопок</li>' +
        '<li>Цвет: Белый</li>' +
        '<li>Ширина: 45 см</li>' +
        '<li>Длина в рулоне: 60 м</li>' +
        '<li>Плотность: 150г/м2</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'inventory/3.jpg',
      title: 'Вафельное полотно',
      price: '54 руб.',
      link: '/inventory'
    },
    {
      id: 4,
      titleHeader: 'Ветошь трикотаж цветной темных тонов',
      description: '<h3>Сфера применения: </h3>' +
        '<li>Легкая, прочная, очень мягкая</li>' +
        '<li>Отлично впитывает воду, масло, нефтепродукты</li>' +
        '<li>Идеально подходит для полиграфии, химических производств</li>' +
        '<li>Может использоваться на любом предприятии</li>' +
        '<h3>Характеристики: </h3>' +
        '<li>Ветошь "Темный трикотаж" – это переработанные на лоскуты майки, футболки, водолазки, халаты</li>' +
        '<li>Лоскуты неправильной формы, размером, примерно 40x60 см</li>' +
        '<li>Масса брикета составляет 10кг</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'inventory/4.jpg',
      title: 'Ветошь трикотаж цветной темных тонов',
      price: '169 руб.',
      link: '/inventory'
    },
    {
      id: 5,
      titleHeader: 'Ветошь белый трикотаж',
      description:
        'Ветошь белый трикотаж отличный обтирочный материал используется при работе с растворителями и при проведении различных работ по окраске поверхностей деталей, конструкций и т.п.' +
        '<li>Бесшовная «дышащая» основа из полиэфира с хлопком с плотностью вязки 13 петель на дюйм</li>' +
        '<h3>Характеристики: </h3>' +
        '<li>Ветошь упакованна в брикет весом 10 кг, в которой уложены части хб ткани белых футболок, размером 40х40 см и более</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'inventory/5.jpg',
      title: 'Ветошь белый трикотаж',
      price: '249 руб.',
      link: '/inventory'
    },
    {
      id: 6,
      titleHeader: 'Ветошь фланель',
      description:
        'Прекрасно подходит для полировки, хорошо убирает масло с холодного металла.' +
        '<h3>Характеристики: </h3>' +
        '<li>100% х/б</li>' +
        '<li>40х60см</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'inventory/6.jpg',
      title: 'Ветошь фланель',
      price: '32 руб.',
      link: '/inventory'
    },
    {
      id: 7,
      titleHeader: 'Ветошь махровая',
      description:
        '<li>Ветошь махровая - обтирочный материал состоящий из махровых лоскутов</li>' +
        '<li>Махра используется из 100% хлопка</li>' +
        '<li>Прекрасно подходит для обтирки рук, уборки помещений, хорошо впитывает воду, также используется в мастерских автотехобслуживания</li>' +
        '<h3>Характеристики: </h3>' +
        '<li>Цветные махровые полотенца, пижамы, халаты, постельное белье</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'inventory/7.jpg',
      title: 'Ветошь махровая',
      price: '285 руб.',
      link: '/inventory'
    },
    {
      id: 8,
      titleHeader: 'Ветошь махровые полотенца',
      description:'<h3>Сфера применения: </h3>' +
        '<li>Прекрасно впитывает любые жидкости</li>' +
        '<li>Идеально подходит для уборки помещений, сбора воды и т.п</li>' +
        '<li>Может выступать, как очень выгодная альтернатива ХПП (холсто-прошивное полотно), превосходя его по прочности, и долговечности</li>' +
        '<li>При этом цена "Махры" - в 2 раза ниже, при расчете на 1 кг обтирочного материала</li>' +
        '<h3>Характеристики: </h3>' +
        '<li>Ветошь "Махра" - это переработанные махровые полотенца, махровые простыни 100% х/б</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'inventory/8.jpg',
      title: 'Ветошь махровые полотенца',
      price: '285 руб.',
      link: '/inventory'
    },
    {
      id: 9,
      titleHeader: 'Метла березовая',
      description: 'Применяется для уборки дворов, скверов, парков, площадей, автомобильных парковок и других территорий, а также крупных производственных помещений. Очень ценится за экологичность и удобство эксплуатации' +
        '<h3>Характеристики: </h3>' +
        '<li>Изготовлено из молодых и гибких березовых веток ручным способом</li>' +
        '<li>Предназначены для бытовых и хозяйственных нужд</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'inventory/9.jpg',
      title: 'Метла березовая',
      price: '32 руб.',
      link: '/inventory'
    },
    {
      id: 10,
      titleHeader: 'Круг отрезной 41 125 1.2 22.23 A 54 S BF 80 мет. + нерж.ex.',
      description:
        '<h3>Характеристики: </h3>' +
        '<li>Связка (BF) бакелит армированный</li>' +
        '<li>Тип (Форма) 41</li>' +
        '<li>Серия кругов Extra</li>' +
        '<li>Диаметр внешний (D, мм) 125</li>' +
        '<li>Высота (T, мм) 1.2</li>' +
        '<li>Диаметр внутренний (H, мм) 22.23</li>' +
        '<li>Марка зерна A</li>' +
        '<li>Комментарий 94т 260*515*75</li>' +
        '<li>Зернистость 54</li>' +
        '<li>Твердость S</li>' +
        '<li>Скорость (м/с) 80</li>' +
        '<li>Скорость (об/мин) 12250</li>' +
        '<li>Примечание мет. + нерж.ex.</li>' +
        '<li>Стандарт ГОСТ Р 57978-17,ГОСТ Р 52588-11</li>' +
        '<li>ШтрихКод 4603347328064</li>' +
        '<li>Количество в упаковке 400</li>' +
        '<li>Минимальный заказ (упаковок) 1</li>' +
        '<li>Единица измерения шт</li>' +
        '<li>Вес (одной ед., кг) 0.035</li>' +
        '<li>Вес брутто (одной упаковки,кг) 14.35</li>' +
        '<li>Максимальное количество на Финпаллете (1000*1200, в шт.) 32000</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'circle/125_1.2_A_54_S_BF_80.webp',
      title: 'Круг отрезной 41 125 1.2 22.23 A 54 S BF 80',
      price: '24,66 руб.',
      link: '/inventory'
    },
    {
      id: 11,
      titleHeader: 'Круг отрезной 41 125 1.6 22.23 A 40 S BF 80 мет. + нерж.ex.',
      description:
        '<h3>Характеристики: </h3>' +
        '<li>Связка (BF) бакелит армированный</li>' +
        '<li>Тип (Форма) 41</li>' +
        '<li>Серия кругов Extra</li>' +
        '<li>Диаметр внешний (D, мм) 125</li>' +
        '<li>Высота (T, мм) 1.6</li>' +
        '<li>Диаметр внутренний (H, мм) 22.23</li>' +
        '<li>Марка зерна A</li>' +
        '<li>Комментарий 94т 260*515*90</li>' +
        '<li>Зернистость 40</li>' +
        '<li>Твердость S</li>' +
        '<li>Скорость (м/с) 80</li>' +
        '<li>Скорость (об/мин) 12250</li>' +
        '<li>Примечание мет. + нерж.ex.</li>' +
        '<li>Стандарт ГОСТ Р 57978-17,ГОСТ Р 52588-11</li>' +
        '<li>ШтрихКод 4603347328125</li>' +
        '<li>Количество в упаковке 400</li>' +
        '<li>Минимальный заказ (упаковок) 1</li>' +
        '<li>Единица измерения шт</li>' +
        '<li>Вес (одной ед., кг) 0.044</li>' +
        '<li>Вес брутто (одной упаковки,кг) 18.04</li>' +
        '<li>Максимальное количество на Финпаллете (1000*1200, в шт.) 25600</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'circle/125_1.6_A_40_S_BF_80.webp',
      title: 'Круг отрезной 41 125 1.6 22.23 A 40 S BF 80',
      price: '25,71 руб.',
      link: '/inventory'
    },
    {
      id: 12,
      titleHeader: 'Круг отрезной 41 230 1.6 22.23 A 40 S BF 80 мет. + нерж. Ex',
      description:
        '<h3>Характеристики: </h3>' +
        '<li>Связка (BF) бакелит армированный</li>' +
        '<li>Тип (Форма) 41</li>' +
        '<li>Серия кругов Extra</li>' +
        '<li>Диаметр внешний (D, мм) 230</li>' +
        '<li>Высота (T, мм) 1.6</li>' +
        '<li>Диаметр внутренний (H, мм) 22.23</li>' +
        '<li>Марка зерна A</li>' +
        '<li>Комментарий 94т 465*235*95</li>' +
        '<li>Зернистость 40</li>' +
        '<li>Твердость S</li>' +
        '<li>Скорость (м/с) 80</li>' +
        '<li>Скорость (об/мин) 6650</li>' +
        '<li>Примечание мет. + нерж.ex.</li>' +
        '<li>Стандарт ГОСТ Р 57978-17,ГОСТ Р 52588-11</li>' +
        '<li>ШтрихКод 4603347328156</li>' +
        '<li>Количество в упаковке 100</li>' +
        '<li>Минимальный заказ (упаковок) 1</li>' +
        '<li>Единица измерения шт</li>' +
        '<li>Вес (одной ед., кг) 0.163</li>' +
        '<li>Вес брутто (одной упаковки,кг) 16.71</li>' +
        '<li>Максимальное количество на Финпаллете (1000*1200, в шт.) 8000</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'circle/230_1.6_A_40_S_BF_80.webp',
      title: 'Круг отрезной 41 230 1.6 22.23 A 40 S BF 80',
      price: '69,73 руб.',
      link: '/inventory'
    },
    {
      id: 13,
      titleHeader: 'Круг отрезной 41 180 1.6 22.23 A 40 S BF 80 мет. + нерж. Ex',
      description:
        '<h3>Характеристики: </h3>' +
        '<li>Связка (BF) бакелит армированный</li>' +
        '<li>Тип (Форма) 41</li>' +
        '<li>Серия кругов Extra</li>' +
        '<li>Диаметр внешний (D, мм) 180</li>' +
        '<li>Высота (T, мм) 1.6</li>' +
        '<li>Диаметр внутренний (H, мм) 22.23</li>' +
        '<li>Марка зерна A</li>' +
        '<li>Комментарий 94т 370*185*140</li>' +
        '<li>Зернистость 40</li>' +
        '<li>Твердость S</li>' +
        '<li>Скорость (м/с) 80</li>' +
        '<li>Скорость (об/мин) 8500</li>' +
        '<li>Примечание мет. + нерж.ex.</li>' +
        '<li>Стандарт ГОСТ Р 57978-17,ГОСТ Р 52588-11</li>' +
        '<li>ШтрихКод 4603347328149</li>' +
        '<li>Количество в упаковке 150</li>' +
        '<li>Минимальный заказ (упаковок) 1</li>' +
        '<li>Единица измерения шт</li>' +
        '<li>Вес (одной ед., кг) 0.087</li>' +
        '<li>Вес брутто (одной упаковки,кг) 13.38</li>' +
        '<li>Максимальное количество на Финпаллете (1000*1200, в шт.) 13500</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'circle/180_1.6_A_40_S_BF_80.webp',
      title: 'Круг отрезной 41 180 1.6 22.23 A 40 S BF 80',
      price: '40,56 руб.',
      link: '/inventory'
    },
    {
      id: 14,
      titleHeader: 'Круг отрезной 41 150 1.6 22.23 A 40 S BF 80 мет. + нерж.ex',
      description:
        '<h3>Характеристики: </h3>' +
        '<li>Связка (BF) бакелит армированный</li>' +
        '<li>Тип (Форма) 41</li>' +
        '<li>Серия кругов Extra</li>' +
        '<li>Диаметр внешний (D, мм) 150</li>' +
        '<li>Высота (T, мм) 1.6</li>' +
        '<li>Диаметр внутренний (H, мм) 22.23</li>' +
        '<li>Марка зерна A</li>' +
        '<li>Комментарий 94т 308*308*93</li>' +
        '<li>Зернистость 40</li>' +
        '<li>Твердость S</li>' +
        '<li>Скорость (м/с) 80</li>' +
        '<li>Скорость (об/мин) 10200</li>' +
        '<li>Примечание мет. + нерж.ex.</li>' +
        '<li>Стандарт ГОСТ Р 57978-17,ГОСТ Р 52588-11</li>' +
        '<li>ШтрихКод 4603347328132</li>' +
        '<li>Количество в упаковке 200</li>' +
        '<li>Минимальный заказ (упаковок) 1</li>' +
        '<li>Единица измерения шт</li>' +
        '<li>Вес (одной ед., кг) 0.060</li>' +
        '<li>Вес брутто (одной упаковки,кг) 12.30</li>' +
        '<li>Максимальное количество на Финпаллете (1000*1200, в шт.) 19200</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'circle/150_1.6_A_40_S_BF_80.webp',
      title: 'Круг отрезной 41 150 1.6 22.23 A 40 S BF 80',
      price: '31,17 руб.',
      link: '/inventory'
    },
    {
      id: 15,
      titleHeader: 'Круг отрезной 41 150 1.2 22.23 A 54 S BF 80 мет. + нерж.ex',
      description:
        '<h3>Характеристики: </h3>' +
        '<li>Связка (BF) бакелит армированный</li>' +
        '<li>Тип (Форма) 41</li>' +
        '<li>Серия кругов Extra</li>' +
        '<li>Диаметр внешний (D, мм) 150</li>' +
        '<li>Высота (T, мм) 1.2</li>' +
        '<li>Диаметр внутренний (H, мм) 22.23</li>' +
        '<li>Марка зерна A</li>' +
        '<li>Комментарий 94т 308*308*78</li>' +
        '<li>Зернистость 54</li>' +
        '<li>Твердость S</li>' +
        '<li>Скорость (м/с) 80</li>' +
        '<li>Скорость (об/мин) 10200</li>' +
        '<li>Примечание мет. + нерж.ex.</li>' +
        '<li>Стандарт ГОСТ Р 57978-17,ГОСТ Р 52588-11</li>' +
        '<li>ШтрихКод 4603347352038</li>' +
        '<li>Количество в упаковке 200</li>' +
        '<li>Минимальный заказ (упаковок) 1</li>' +
        '<li>Единица измерения шт</li>' +
        '<li>Вес (одной ед., кг) 0.050</li>' +
        '<li>Вес брутто (одной упаковки,кг) 10.25</li>' +
        '<li>Максимальное количество на Финпаллете (1000*1200, в шт.) 19200</li>',
      material: '',
      category: 'Хозинвентарь',
      image: 'circle/150_1.2_A_54_S_BF_80.webp',
      title: 'Круг отрезной 41 150 1.2 22.23 A 54 S BF 80',
      price: '29,30 руб.',
      link: '/inventory'
    },
  ]

  inventory = [
    {
      page: 1,
      content: this.inventoryArray
    },
  ]

  activeParams: number = this.inventory.length;
}
