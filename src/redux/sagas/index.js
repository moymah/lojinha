import { takeLatest } from 'redux-saga/effects'
import { handleGetHero, handleGetProducts } from './handlers/products'

export function* rootSaga() {
  yield takeLatest('GET_PRODUCTS', handleGetProducts)
  yield takeLatest('GET_HERO', handleGetHero)
}
