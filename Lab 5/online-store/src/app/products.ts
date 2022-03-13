export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  image: string;
  rating: string;
  categoryid: number; 
}

export const products = [
  {
    id: 1,
    name: 'Jabra Evolve 65 MS Wireless Headset',
    price: 198,
    description: 'This pro headset is certified for Skype for Business for simple UC integration for plug and play right out of the box',
    url: 'https://www.amazon.com/Jabra-Evolve-Stereo-Link-Communication/dp/B00ODRSN0A/ref=sr_1_25?qid=1647106587&rnid=16225009011&s=electronics&sr=1-25',
    image: 'https://m.media-amazon.com/images/I/71r0AlAXj+L._AC_SX679_.jpg',
    rating: '5.png',
    categoryid: 3
  },
  {
    id: 2,
    name: 'HP 15-inch Laptop',
    price: 469,
    description: 'A laptop with thin and light design',
    url: 'https://www.amazon.com/HP-Generation-i5-1135G7-Graphics-15-dy2024nr/dp/B09FXFDGN3/ref=sr_1_7?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-7',
    image: 'https://m.media-amazon.com/images/I/71RD3vsjIYL._AC_SX679_.jpg',
    rating: '5.png',
    categoryid: 1
  },
  {
    id: 3,
    name: 'Samsung Galaxy Tab A7',
    price: 129,
    description: 'A tablet with An Enhanced Quad Speaker System',
    url: 'https://www.amazon.com/Samsung-Galaxy-Wi-Fi-Silver-SM-T500NZSAXAR/dp/B08GHVSGMQ/ref=sr_1_8?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-8&th=1',
    image: 'https://m.media-amazon.com/images/I/71MvL2kCFCL._AC_SY879_.jpg',
    rating: '5.png',
    categoryid: 2
  },
  {
    id: 4,
    name: 'HP Pavilion 15 Laptop',
    price: 779,
    description: 'A laptop with premium performance',
    url: 'https://www.amazon.com/HP-i7-1165G7-Processor-Micro-Edge-15-eg0025nr/dp/B09FX1YF28/ref=sr_1_16?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-16',
    image: 'https://m.media-amazon.com/images/I/711Nx6ZoRML._AC_SX466_.jpg',
    rating: '5.png',
    categoryid: 1
  },
  {
    id: 5,
    name: 'HP Chromebook 11-inch Laptop',
    price: 589,
    description: 'A laptop with long battery life',
    url: 'https://www.amazon.com/HP-Chromebook-11-inch-Laptop-11a-na0010nr/dp/B08HJT1BKQ/ref=sr_1_17?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-17&th=1',
    image: 'https://m.media-amazon.com/images/I/81EY2GIfktL._AC_SX466_.jpg',
    rating: '5.png',
    categoryid: 1
  },
  {
    id: 6,
    name: 'Samsung Electronics Galaxy Tab A8',
    price: 949,
    description: 'A tablet with an upgraded chipset and plenty of room to keep files',
    url: 'https://www.amazon.com/Samsung-Electronics-Android-Long-Lasting-Expandable/dp/B09N3XRLZH/ref=sr_1_21?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-21',
    image: 'https://m.media-amazon.com/images/I/61krikJxTmL._AC_SX679_.jpg',
    rating: '5.png',
    categoryid: 2
  },
  {
    id: 7,
    name: 'MSI Stealth 15M Gaming Laptop',
    price: 669,
    description: 'Designed to be thin and light for gamers to carry around every day for games, study, or work.',
    url: 'https://www.amazon.com/MSI-Stealth-15M-Gaming-Laptop/dp/B091GGZT1S/ref=sr_1_23?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-23&th=1',
    image: 'https://m.media-amazon.com/images/I/71p3Ygm14wL._AC_SX679_.jpg',
    rating: '5.png',
    categoryid: 1
  },
  {
    id: 8,
    name: 'HP 15 Laptop',
    price: 589,
    description: 'Whether it’s games or movies, experience high performance for all your entertainment with the AMD Radeon Graphics card',
    url: 'https://www.amazon.com/HP-Processor-Micro-Edge-Long-Lasting-15-ef2024nr/dp/B09J1PS4TG/ref=sr_1_25?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-25&th=1',
    image: 'https://m.media-amazon.com/images/I/81vZsNmHMwL._AC_SX679_.jpg',
    rating: '5.png',
    categoryid: 1
  },
  {
    id: 9,
    name: 'Acer Aspire 5 A515-56-36UT',
    price: 499,
    description: 'A laptop With Turbo Boost Technology, get up to 4.1GHz for your high-demand applications',
    url: 'https://www.amazon.com/Acer-A515-56-36UT-Display-i3-1115G4-Processor/dp/B08VKT45K4/ref=sr_1_26?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-26&th=1',
    image: 'https://m.media-amazon.com/images/I/41hkHUpPbRS._AC_.jpg',
    rating: '5.png',
    categoryid: 1
  },
  {
    id: 10,
    name: 'Wired Mouse for Laptop',
    price: 19,
    description: 'Provides Thumb Rest, Ergonomic Design',
    url: 'https://www.amazon.com/Ergonomic-Computer-4-Level-Compatible-Notebook/dp/B09P7XLF4K/ref=sr_1_32_sspa?qid=1647152490&s=computers-intl-ship&sr=1-32-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFMMUlDWUg2UkhYSTImZW5jcnlwdGVkSWQ9QTA2NDYzNTBKWjJITzcyRk5SM1EmZW5jcnlwdGVkQWRJZD1BMDY1NzE0OTJDN1BaTTNJODRORjYmd2lkZ2V0TmFtZT1zcF9idGZfYnJvd3NlJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    image: 'https://m.media-amazon.com/images/I/61yBtXUKjpL._AC_SX466_.jpg',
    rating: '5.png',
    categoryid: 3
  },
  {
    id: 11,
    name: 'Samsung Galaxy Tab Active PRO 10.1',
    price: 549,
    description: 'The 10.1-inch WiFi-enabled 64gb Tab Active Pro tablet is ruggedized for tough conditions',
    url: 'https://www.amazon.com/Samsung-Galaxy-Active-Water-Resistant-Rugged/dp/B07YNJD8J3/ref=sr_1_23?qid=1647148212&rnid=13896617011&s=computers-intl-ship&sr=1-23&th=1',
    image: 'https://m.media-amazon.com/images/I/71XFm0upzQL._AC_SY606_.jpg',
    rating: '5.png',
    categoryid: 2
  },
  {
    id: 12, 
    name: 'Lenovo Yoga Smart Tab',
    price: 219,
    description: 'Qualcomm Snapdragon 439 ',
    url: 'https://www.amazon.com/Lenovo-Android-Octa-Core-Processor-ZA3V0005US/dp/B0881HDRTH/ref=sr_1_24?qid=1647148212&rnid=13896617011&s=computers-intl-ship&sr=1-24',
    image: 'https://m.media-amazon.com/images/I/51b83xHaSfL._AC_SL1060_.jpg',
    rating: '5.png',
    categoryid: 2
  },
  {
    id: 13, 
    name: 'Tablet 10 Inch Android 9 HD',
    price: 429,
    description: 'This Android 9 Pie tablet with a large HD 10.1 inch 1280*800 bright IPS screen resolution offers accurate colors',
    url: 'https://www.amazon.com/Android-Tablets-Bluetooth-Touchscreen-Certified/dp/B0874B14QB/ref=sr_1_25?qid=1647148212&rnid=13896617011&s=computers-intl-ship&sr=1-25&th=1',
    image: 'https://m.media-amazon.com/images/I/71JxproF3bL._AC_SL1500_.jpg',
    rating: '5.png',
    categoryid: 2
  },
  {
    id: 14,
    name: 'Stylus Pen for iPad with Palm Rejection',
    price: 7,
    description: 'Not Compatible With iPhone, Android, Microsoft devices.',
    url: 'https://www.amazon.com/Rejection-Compatible-2018-2021-Precise-Writing/dp/B0831BF1FH/ref=sr_1_52?qid=1647148920&rnid=16225007011&s=computers-intl-ship&sr=1-52',
    image: 'https://m.media-amazon.com/images/I/41gTIFgAiQL._AC_SY879_.jpg',
    rating: '5.png',
    categoryid: 3
  },
  {
    id: 15,
    name: 'Logitech B100 Corded Mouse',
    price: 10,
    description: 'A comfortable, ambidextrous shape feels good in either hand',
    url: 'https://www.amazon.com/Logitech-B100-Corded-Mouse-Computers/dp/B003L62T7W/ref=sr_1_54?qid=1647149172&rnid=16225007011&s=computers-intl-ship&sr=1-54&th=1',
    image: 'https://m.media-amazon.com/images/I/61hzuoXwjqL._AC_SX466_.jpg',
    rating: '5.png',
    categoryid: 3
  },
  {
    id: 16,
    name: 'BENGOO G9000 Stereo Gaming Headset',
    price: 99,
    description: 'Superior comfortable and good air permeability protein over-ear pads',
    url: 'https://www.amazon.com/BENGOO-G9000-Controller-Cancelling-Headphones/dp/B01H6GUCCQ/ref=sr_1_53?qid=1647149172&rnid=16225007011&s=computers-intl-ship&sr=1-53&th=1',
    image: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX466_.jpg',
    rating: '5.png',
    categoryid: 3
  },
  {
    id: 17,
    name: 'Canon Pixma MG3620',
    price: 95,
    description: 'Easily print from your iPhone, iPad, Android or tablet',
    url: 'https://www.amazon.com/Canon-MG3620-Wireless-Printer-Printing/dp/B010A7TZ76/ref=sr_1_2?qid=1647149449&rnid=16225007011&s=computers-intl-ship&sr=1-2&th=1',
    image: 'https://m.media-amazon.com/images/I/81qAy8skVEL._AC_SX679_.jpg',
    rating: '4.png',
    categoryid: 4
  },
  {
    id: 18,
    name: 'ROLLO Shipping Label Printer',
    price: 178,
    description: 'Works with any Thermal Direct Label including free UPS labels',
    url: 'https://www.amazon.com/Rollo-Label-Printer-Commercial-Compatible/dp/B01MA3EYC5/ref=sr_1_4?qid=1647149449&rnid=16225007011&s=computers-intl-ship&sr=1-4',
    image: 'https://m.media-amazon.com/images/I/71TZnqy6AJL._AC_SX466_.jpg',
    rating: '5.png',
    categoryid: 4
  },
  {
    id: 19,
    name: 'DYMO 1755120',
    price: 199,
    description: 'Shipping label printer',
    url: 'https://www.amazon.com/DYMO-LabelWriter-Thermal-Printer-1755120/dp/B002M1LGJ4/ref=sr_1_5?qid=1647149449&rnid=16225007011&s=computers-intl-ship&sr=1-5&th=1',
    image: 'https://m.media-amazon.com/images/I/81ymjeLxrvS._AC_SX466_.jpg',
    rating: '5.png',
    categoryid: 4
  },
  {
    id: 20,
    name: 'Epson EcoTank ET-2720',
    price: 169,
    description: 'Your family needs a printer that’s fast, affordable, and easy to use.',
    url: 'https://www.amazon.com/Epson-EcoTank-Wireless-Supertank-Printer/dp/B07PYDNF7L/ref=sr_1_6?qid=1647149449&rnid=16225007011&s=computers-intl-ship&sr=1-6&th=1',
    image: 'https://m.media-amazon.com/images/I/71nZ3MAbFjS._AC_SX466_.jpg',
    rating: '4.png',
    categoryid: 4
  },
  {
    id: 21,
    name: 'Canon TS202 Inkjet Photo Printer',
    price: 34,
    description: 'Fine hybrid ink system for detailed documents and photos',
    url: 'https://www.amazon.com/Canon-TS202-Inkjet-Photo-Printer/dp/B078X1DQ2Y/ref=sr_1_9?qid=1647149449&rnid=16225007011&s=computers-intl-ship&sr=1-9&th=1',
    image: 'https://m.media-amazon.com/images/I/91DlzPRjSaL._AC_SX466_.jpg',
    rating: '5.png',
    categoryid: 4
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/