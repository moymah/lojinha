import { api } from '../../../services'

export const requestGetProducts = () => api.get('/products')

export const requestGetHero = () => api.get('/hero')
