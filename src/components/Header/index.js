import { CartToggle } from '../CartToggle'
import { Typography } from '../Typography'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <Typography size="large" color="grayscale" colorWeight="100" bold>
        Nintendo Shop
      </Typography>
      <CartToggle />
    </S.Container>
  )
}
