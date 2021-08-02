// Products Actions

export const getProducts = () => ({
  type: 'GET_PRODUCTS'
})

export const setLoading = (loading) => ({
  type: 'SET_LOADING',
  loading
})

export const setHero = (hero) => ({
  type: 'SET_HERO',
  hero
})

export const getHero = () => ({
  type: 'GET_HERO'
})

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  products
})

// Cart Actions

export const addProductInCart = (id) => ({
  type: 'ADD_PRODUCT_IN_CART',
  id
})

export const removeProductFromCart = (id) => ({
  type: 'REMOVE_PRODUCT_FROM_CART',
  id
})
