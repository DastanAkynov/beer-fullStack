const initialState = {
  basketSum: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_PRICE':
      return {
        basketSum: action.data
      }
    case 'DECREASE_PRICE': 
      return {
        basketSum: action.data
      }
    default:
      return state
  }
}

export default reducer;