const INITIAL_STATE = {
  loading: false,
  products: [],
  hero: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.products }
    case 'SET_LOADING':
      return { ...state, loading: action.loading }
    case 'SET_HERO':
      return { ...state, hero: action.hero }
    default:
      return state
  }
}

export default reducer
