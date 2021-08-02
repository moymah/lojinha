import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button'
import { Typography } from '../Typography'
import { addProductInCart, removeProductFromCart } from '../../redux/actions'
import * as S from './styles'
import { CartIcon } from '../../assets/icons'
import { formatBRL } from '../../utils'

const findProducts = (cartList, products) =>
  cartList.map((cart) => {
    const selectedProduct = products.find((product) => product.id === cart.id)

    return {
      ...selectedProduct,
      quantity: cart.quantity
    }
  })

export const CartToggle = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [productsInCart, setProductsInCart] = useState([])
  const [totalValue, setTotalValue] = useState(0)
  const products = useSelector((state) => state.productsReducer.products)
  const cart = useSelector((state) => state.cartReducer.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    const selectedProducts = findProducts(cart, products)
    const total = selectedProducts.map(
      ({ value, quantity }) => value * quantity
    )
    const total2 = total.reduce((curr, accum) => curr + accum, 0)
    setTotalValue(total2)
    setProductsInCart(selectedProducts)
  }, [products, cart])

  const handleRemoveProduct = (id) => dispatch(removeProductFromCart(id))
  const handleAddProduct = (id) => dispatch(addProductInCart(id))

  return (
    <S.Content>
      <S.ToggleButton onClick={() => setIsOpen(!isOpen)}>
        <CartIcon width="24px" />
      </S.ToggleButton>
      {isOpen &&
        (productsInCart.length > 0 ? (
          <S.Container>
            <table>
              <tbody>
                <tr>
                  <th> </th>
                  <th>
                    <Typography size="small" color="grayscale" bold>
                      Produto
                    </Typography>
                  </th>
                  <th>
                    <Typography size="small" color="grayscale" bold>
                      Preço
                    </Typography>
                  </th>
                  <th>
                    <Typography size="small" color="grayscale" bold>
                      Quantidade
                    </Typography>
                  </th>
                  <th> </th>
                </tr>
                {productsInCart.map(
                  ({ name, value, id, quantity, picture }) => (
                    <tr key={`${name}${id}${quantity}`}>
                      <th>
                        <img
                          src={picture}
                          width="48px"
                          alt={`imagem do jogo ${name}`}
                        />
                      </th>
                      <th>
                        <Typography size="small">{name}</Typography>
                      </th>
                      <th>
                        <Typography size="small" bold>
                          R$ {formatBRL(value)}
                        </Typography>
                      </th>
                      <th>
                        <Typography size="small">{quantity}</Typography>
                      </th>
                      <th>
                        <div style={{ display: 'flex' }}>
                          <Button
                            size="small"
                            onClick={() => handleAddProduct(id)}
                          >
                            +
                          </Button>
                          <Button
                            size="small"
                            onClick={() => handleRemoveProduct(id)}
                          >
                            -
                          </Button>
                        </div>
                      </th>
                    </tr>
                  )
                )}
                <tr>
                  <th> </th>
                  <th> </th>
                  <th> </th>
                  <th>Total: R$ {formatBRL(totalValue)}</th>
                </tr>
              </tbody>
            </table>
          </S.Container>
        ) : (
          <S.EmptyState>
            <Typography>Nenhum produto no carrinho</Typography>
          </S.EmptyState>
        ))}
    </S.Content>
  )
}
