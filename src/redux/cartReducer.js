const INITIAL_STATE = {
  cart: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.products }
    case 'ADD_PRODUCT_IN_CART': {
      const alreadyHasProductInCart = state.cart.findIndex(
        ({ id }) => id === action.id
      )

      if (alreadyHasProductInCart >= 0) {
        const newCartState = state.cart.map((value) =>
          value.id === action.id
            ? { ...value, quantity: value.quantity + 1 }
            : value
        )

        return {
          ...state,
          cart: newCartState
        }
      }

      return {
        ...state,
        cart: [...state.cart, { id: action.id, quantity: 1 }]
      }
    }
    case 'REMOVE_PRODUCT_FROM_CART': {
      const selectedProductIndex = state.cart.findIndex(
        ({ id }) => id === action.id
      )

      if (
        selectedProductIndex >= 0 &&
        state.cart[selectedProductIndex].quantity === 1
      ) {
        const newArray = state.cart.filter(({ id }) => id !== action.id)
        return {
          ...state,
          cart: newArray
        }
      }

      const newCart = state.cart
      newCart[selectedProductIndex].quantity -= 1

      return {
        ...state,
        cart: [...newCart]
      }
    }

    default:
      return state
  }
}

export default reducer
