const filterAction = (route, filtered) => {
  return {
    type: 'FILTER' + route.toString().toUpperCase(),
    payload: filtered,
  };
};

// definded filter schema match backend!
const filterSchema = (FILTER) => {
  return {
    filteredColor: {
      field: 'mainColor',
      selecType: 'SIGLE_OF_ARRAY',
      value: null,
    },
    filteredPrice: {
      field: 'price',
      selectType: 'RANGE',
      value: [FILTER.price.from, FILTER.price.to],
    },
    filteredSize: {
      field: 'size',
      selecType: 'SIGLE_OF_ARRAY',
      value: null,
    },
    filteredType: {
      field: 'productType',
      selecType: 'SIGLE_OF_ARRAY',
      value: null,
    },
  };
};
export { filterSchema, filterAction };
