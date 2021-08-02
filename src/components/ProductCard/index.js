import PropTypes from 'prop-types'
import { Typography } from '../Typography'
import { Button } from '../Button'
import { formatBRL } from '../../utils'
import * as S from './styles'

export const ProductCard = ({
  product: { id, name, platforms, value, picture },
  onClickAddToCart,
  onClickKnowMore
}) => {
  return (
    <S.Container id={id}>
      <S.Content>
        <S.Title>
          <Typography color="primary" bold>
            {name}
          </Typography>
        </S.Title>
        <S.ProductImage src={picture} alt={`imagem de ${name}`} />
        <div>
          <S.PlatformContainer>
            {platforms.map((platform) => (
              <S.Platform key={platform}>
                <Typography size="xsmall" color="grayscale" bold>
                  {platform}
                </Typography>
              </S.Platform>
            ))}
          </S.PlatformContainer>
          <S.Value>
            <Typography size="small" color="grayscale">
              R$
            </Typography>
            <Typography size="large" bold color="grayscale">
              {formatBRL(value)}
            </Typography>
          </S.Value>
          <Button size="small" onClick={() => onClickAddToCart(id)}>
            Adicionar ao carrinho
          </Button>
        </div>
      </S.Content>
      <S.KnowMore>
        <Button
          variant="outlined"
          size="small"
          colorWeight="100"
          onClick={onClickKnowMore}
        >
          Saber Mais
        </Button>
      </S.KnowMore>
    </S.Container>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    platforms: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.number,
    picture: PropTypes.string
  }).isRequired,
  onClickAddToCart: PropTypes.func.isRequired,
  onClickKnowMore: PropTypes.func.isRequired
}
