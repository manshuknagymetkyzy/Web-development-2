export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  image: string;
  rating: string;
}

export const products = [
  {
    id: 1,
    name: 'Jabra Evolve 65 MS Wireless Headset',
    price: 198,
    description: 'This pro headset is certified for Skype for Business for simple UC integration for plug and play right out of the box',
    url: 'https://www.amazon.com/Jabra-Evolve-Stereo-Link-Communication/dp/B00ODRSN0A/ref=sr_1_25?qid=1647106587&rnid=16225009011&s=electronics&sr=1-25',
    image: 'https://m.media-amazon.com/images/I/71r0AlAXj+L._AC_SX679_.jpg',
    rating: '5.png'
  },
  {
    id: 2,
    name: 'HP 15-inch Laptop',
    price: 469,
    description: 'A laptop with thin and light design',
    url: 'https://www.amazon.com/HP-Generation-i5-1135G7-Graphics-15-dy2024nr/dp/B09FXFDGN3/ref=sr_1_7?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-7',
    image: 'https://m.media-amazon.com/images/I/71RD3vsjIYL._AC_SX679_.jpg',
    rating: '5.png'
  },
  {
    id: 3,
    name: 'Samsung Galaxy Tab A7',
    price: 129,
    description: 'A tablet with An Enhanced Quad Speaker System',
    url: 'https://www.amazon.com/Samsung-Galaxy-Wi-Fi-Silver-SM-T500NZSAXAR/dp/B08GHVSGMQ/ref=sr_1_8?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-8&th=1',
    image: 'https://m.media-amazon.com/images/I/71MvL2kCFCL._AC_SY879_.jpg',
    rating: '5.png'
  },
  {
    id: 4,
    name: 'HP Pavilion 15 Laptop',
    price: 779,
    description: 'A laptop with premium performance',
    url: 'https://www.amazon.com/HP-i7-1165G7-Processor-Micro-Edge-15-eg0025nr/dp/B09FX1YF28/ref=sr_1_16?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-16',
    image: 'https://m.media-amazon.com/images/I/711Nx6ZoRML._AC_SX466_.jpg',
    rating: '5.png'
  },
  {
    id: 5,
    name: 'HP Chromebook 11-inch Laptop',
    price: 589,
    description: 'A laptop with long battery life',
    url: 'https://www.amazon.com/HP-Chromebook-11-inch-Laptop-11a-na0010nr/dp/B08HJT1BKQ/ref=sr_1_17?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-17&th=1',
    image: 'https://m.media-amazon.com/images/I/81EY2GIfktL._AC_SX466_.jpg',
    rating: '5.png'
  },
  {
    id: 6,
    name: 'Samsung Electronics Galaxy Tab A8',
    price: 949,
    description: 'A tablet with an upgraded chipset and plenty of room to keep files',
    url: 'https://www.amazon.com/Samsung-Electronics-Android-Long-Lasting-Expandable/dp/B09N3XRLZH/ref=sr_1_21?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-21',
    image: 'https://m.media-amazon.com/images/I/61krikJxTmL._AC_SX679_.jpg',
    rating: '5.png'
  },
  {
    id: 7,
    name: 'MSI Stealth 15M Gaming Laptop',
    price: 669,
    description: 'Designed to be thin and light for gamers to carry around every day for games, study, or work.',
    url: 'https://www.amazon.com/MSI-Stealth-15M-Gaming-Laptop/dp/B091GGZT1S/ref=sr_1_23?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-23&th=1',
    image: 'https://m.media-amazon.com/images/I/71p3Ygm14wL._AC_SX679_.jpg',
    rating: '5.png'
  },
  {
    id: 8,
    name: 'HP 15 Laptop',
    price: 589,
    description: 'Whether it’s games or movies, experience high performance for all your entertainment with the AMD Radeon Graphics card',
    url: 'https://www.amazon.com/HP-Processor-Micro-Edge-Long-Lasting-15-ef2024nr/dp/B09J1PS4TG/ref=sr_1_25?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-25&th=1',
    image: 'https://m.media-amazon.com/images/I/81vZsNmHMwL._AC_SX679_.jpg',
    rating: '5.png'
  },
  {
    id: 9,
    name: 'Acer Aspire 5 A515-56-36UT',
    price: 499,
    description: 'A laptop With Turbo Boost Technology, get up to 4.1GHz for your high-demand applications',
    url: 'https://www.amazon.com/Acer-A515-56-36UT-Display-i3-1115G4-Processor/dp/B08VKT45K4/ref=sr_1_26?qid=1647105114&rnid=16225007011&s=computers-intl-ship&sr=1-26&th=1',
    image: 'https://m.media-amazon.com/images/I/41hkHUpPbRS._AC_.jpg',
    rating: '5.png'
  },
  {
    id: 10,
    name: 'Apple Pencil (2nd Generation)',
    price: 119,
    description: 'A pencil with imperceptible lag, pixel-perfect precision, and tilt and pressure sensitivity',
    url: 'https://www.amazon.com/Apple-MU8F2AM-A-Pencil-Generation/dp/B07K1WWBJK/ref=lp_17938598011_1_2',
    image: 'https://m.media-amazon.com/images/I/41S3MKU9TjL._AC_SX522_.jpg',
    rating: '5.png'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/