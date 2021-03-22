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
    { value: 'XS' },
    { value: 'S' },
    { value: 'M' },
    { value: 'L' },
    { value: 'XL' },
  ],
  price: { from: 0, to: 100 },
  type: [
    { value: 'Short' },
    { value: 'Track Pant' },
    { value: 'Hoodie' },
    { value: 'Jacket' },
    { value: 'Tee' },
  ],
};
export { NAV_LIST_URL, WHAT_NEW_LIST, BEST_SELLERS_LIST, FILTER };
