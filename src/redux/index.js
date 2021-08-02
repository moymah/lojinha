import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import productsReducer from './productsReducer'
import cartReducer from './cartReducer'
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    productsReducer,
    cartReducer
  }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
