import { post } from 'axios';
const filterAction = (route, filtered) => {
  return {
    type: 'FILTER' + route.toString().toUpperCase(),
    payload: filtered,
  };
};
// const filterActionAsync = () => (dispatch) => {
//   console.log({ dispatch });
//   post('http://localhost:4000/api/filter').then((data) => {
//     console.log(data);
//   });
// };

// definded filter schema match backend!
const filterSchema = (FILTER) => {
  return {
    filteredColor: {
      field: 'mainColor',
      selectType: 'SIGLE_OF_ARRAY',
      value: null,
    },
    filteredPrice: {
      field: 'price',
      selectType: 'RANGE',
      value: [FILTER.price.from, FILTER.price.to],
    },
    filteredSize: {
      field: 'size',
      selectType: 'SIGLE_OF_ARRAY',
      value: null,
    },
    filteredType: {
      field: 'productType',
      selectType: 'SIGLE_OF_ARRAY',
      value: null,
    },
  };
};
export { filterSchema, filterAction };
