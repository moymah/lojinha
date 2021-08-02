import { call, put } from 'redux-saga/effects'
import { setHero, setLoading, setProducts } from '../../actions'
import { requestGetHero, requestGetProducts } from '../requests/products'

export function* handleGetProducts() {
  try {
    yield put(setLoading(true))
    const response = yield call(requestGetProducts)
    const { data } = response
    yield put(setProducts(data))
  } catch (e) {
    console.log(e)
  } finally {
    yield put(setLoading(false))
  }
}

export function* handleGetHero() {
  try {
    const response = yield call(requestGetHero)
    const { data } = response
    yield put(setHero(data))
  } catch (e) {
    console.log(e)
  }
}
