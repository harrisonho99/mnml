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
export { NAV_LIST_URL, WHAT_NEW_LIST };
