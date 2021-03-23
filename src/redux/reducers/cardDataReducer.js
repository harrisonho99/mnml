const cardData = (state = [], action) => {
  switch (action.type) {
    case 'SET_CARD_DATA':
      return action.payload;
    case 'SET_ERROR':
      return action.payload;
    default:
      return state;
  }
};

export default cardData;
