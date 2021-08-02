import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductInCart } from '../../redux/actions'
import { Header, ProductCard, Hero, Loading } from '../../components'
import * as S from './styles'

export const HomeContainer = () => {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  const products = useSelector((state) => state.productsReducer.products)
  const hero = useSelector((state) => state.productsReducer.hero)
  const isLoading = useSelector((state) => state.productsReducer.loading)

  const onClickAddToCart = (id) => {
    dispatch(addProductInCart(id))
  }

  useEffect(() => {
    const filtered = products.filter(
      ({ name, id }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        JSON.stringify(id).toLowerCase().includes(filter.toLowerCase())
    )

    setFilteredProducts(filtered)
  }, [filter])

  return (
    <S.Container>
      <Header />
      <Hero hero={hero} />
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
          padding: '16px'
        }}
      >
        <input
          style={{ width: '300px' }}
          placeholder="Busca"
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
        />
      </div>

      <S.Content>
        <Loading isLoading={isLoading}>
          {filter
            ? filteredProducts?.map((product, index) => (
                <ProductCard
                  key={`${product.name + index}_card`}
                  product={product}
                  onClickAddToCart={onClickAddToCart}
                  onClickKnowMore={() => null}
                />
              ))
            : products.map((product, index) => (
                <ProductCard
                  key={`${product.name + index}_card`}
                  product={product}
                  onClickAddToCart={onClickAddToCart}
                  onClickKnowMore={() => null}
                />
              ))}
        </Loading>
      </S.Content>
    </S.Container>
  )
}
