const NAV_LIST_URL = [
  { url: '/shop', title: 'SHOP' },
  { url: '/new-arrivals', title: 'NEW ARRIVALS' },
  { title: 'BACK IN STOCK', url: '/back-instock' },
  { title: 'SALE', url: '/sale' },
  { title: 'COMMING  SOON', url: '/comming-soon' },
  { title: 'DENIMS', isExpand: true, url: '/denims' },
  { title: 'BOTTOMS', isExpand: true, url: '/bottoms' },
  { title: 'OUTWEAR', isExpand: true, url: '/outwears' },
  { title: 'ACCESSORIES', isExpand: true, url: '/accessories' },
];

const BEST_SELLERS_LIST = [
  {
    price: 100,
    url: '/best-sellers/1',
    name: 'M12',
    color: 'WHITE',
    imageURL:
      'https://cdn.shopify.com/s/files/1/1300/6871/files/IMG_9290_800x1200.jpg?v=1614970046',
  },
  {
    price: 50,
    url: '/best-sellers/2',
    name: 'M1 WHITE',
    color: 'WHITE',
    imageURL:
      'https://cdn.shopify.com/s/files/1/1300/6871/files/IMG_9537_800x1200.jpg?v=1614970503',
  },
  {
    price: 69,
    url: '/best-sellers/3',
    name: 'RAW FLANNEL',
    color: 'BLACK',
    imageURL:
      'https://cdn.shopify.com/s/files/1/1300/6871/files/V3A6980_800x1200.jpg?v=1614970439',
  },
  {
    price: 100,
    url: '/best-sellers/4',
    name: 'M12',
    color: 'WHITE',
    imageURL:
      'https://cdn.shopify.com/s/files/1/1300/6871/files/IMG_9290_800x1200.jpg?v=1614970046',
  },
  {
    price: 50,
    url: '/best-sellers/5',
    name: 'M1 WHITE',
    color: 'WHITE',
    imageURL:
      'https://cdn.shopify.com/s/files/1/1300/6871/files/IMG_9537_800x1200.jpg?v=1614970503',
  },
  {
    price: 69,
    url: '/best-sellers/6',
    name: 'RAW FLANNEL',
    color: 'BLACK',
    imageURL:
      'https://cdn.shopify.com/s/files/1/1300/6871/files/V3A6980_800x1200.jpg?v=1614970439',
  },
];
const WHAT_NEW_LIST = [
  {
    url: '/1',
    desc: 'RESCTOCKS + NEW ARRIVALS',
    title: 'X DENIM',
    imageURL:
      'https://cdn.shopify.com/s/files/1/1300/6871/files/IMG_9290_800x1200.jpg?v=1614970046',
  },
  {
    url: '/2',
    desc: '25+ NEW STYLES',
    title: 'NEW ARRIVALS',
    imageURL:
      'https://cdn.shopify.com/s/files/1/1300/6871/files/IMG_9537_800x1200.jpg?v=1614970503',
  },
  {
    url: '/3',
    desc: 'BOOTCUT CARGO PANTS + MORE',
    title: 'CARGO',
    imageURL:
      'https://cdn.shopify.com/s/files/1/1300/6871/files/V3A6980_800x1200.jpg?v=1614970439',
  },

  {
    url: '/4',
    desc: 'V245 BAGGY DENIM + MORE',
    title: 'NEW V FIT DENIM',
    imageURL:
      'https://cdn.shopify.com/s/files/1/1300/6871/files/restock_d18925f3-b495-4467-a914-4de3215d1dcc_800x1200.jpg?v=1614969698',
  },
];
const FILTER = {
  color: [
    { value: 'red' },
    { value: 'green' },
    { value: 'blue' },
    { value: 'grey' },
    { value: 'black' },
    { value: 'white' },
  ],
  size: [
    { value: 'xs' },
    { value: 's' },
    { value: 'm' },
    { value: 'l' },
    { value: 'xl' },
  ],
  price: { from: 0, to: 100 },
  type: [
    { value: 'short' },
    { value: 'trackpant' },
    { value: 'hoodie' },
    { value: 'jacket' },
    { value: 'tee' },
  ],
};
const PRODUCT_DETAIL = {
  imageURL: [
    'https://cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_650x975.jpg?v=1611738150%201x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_1300x1950.jpg?v=1611738150%202x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_1950x2925.jpg?v=1611738150%203x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_2600x3900.jpg?v=1611738150%204x//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_650x975.jpg?v=1611738150%201x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_1300x1950.jpg?v=1611738150%202x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_1950x2925.jpg?v=1611738150%203x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_2600x3900.jpg?v=1611738150%204xhttps://cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_650x975.jpg?v=1611738150%201x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_1300x1950.jpg?v=1611738150%202x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_1950x2925.jpg?v=1611738150%203x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_2600x3900.jpg?v=1611738150%204x//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_650x975.jpg?v=1611738150%201x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_1300x1950.jpg?v=1611738150%202x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_1950x2925.jpg?v=1611738150%203x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-3_2600x3900.jpg?v=1611738150%204x',
    'https://cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-4_650x975.jpg?v=1611738150',
    'https://cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-2_650x975.jpg?v=1611738150%201x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-2_1300x1950.jpg?v=1611738150%202x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-2_1950x2925.jpg?v=1611738150%203x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-2_2600x3900.jpg?v=1611738150%204x',
    'https://cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-5_1950x2925.jpg?v=1611738150',
    'https://cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-6_650x975.jpg?v=1611738150',
    'https://cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-7_650x975.jpg?v=1611738150',
    'https://cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-8_650x975.jpg?v=1611738150%201x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-8_1300x1950.jpg?v=1611738150%202x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-8_1950x2925.jpg?v=1611738150%203x,%20//cdn.shopify.com/s/files/1/1300/6871/products/every-day-fleece-pants-black-8_2600x3900.jpg?v=1611738150%204x',
  ],
  sizeAvailable: ['x', 's', 'm', 'l', 'xl', 'xxl'],
  price: 50,
  description:
    'the Every Day Fleece Pants are designed with a relaxed fit throughout, featuring an elastic waistband, tonal cotton drawcord, welt pockets at the side seam, and finished with elastic cord locks at the leg opening.',
  detail: [
    'relaxed fit',
    '100% polyester',
    'model is 6’1, 140 lbs and wears a size medium',
  ],
};
export {
  PRODUCT_DETAIL,
  NAV_LIST_URL,
  WHAT_NEW_LIST,
  BEST_SELLERS_LIST,
  FILTER,
};
