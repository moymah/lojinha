import PropTypes from 'prop-types'
import * as S from './styles'

export const Typography = ({ color, children, colorWeight, size, bold }) => {
  return (
    <S.Typography
      bold={bold}
      size={size}
      color={color}
      colorWeight={colorWeight}
    >
      {children}
    </S.Typography>
  )
}

Typography.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'grayscale']),
  children: PropTypes.node.isRequired,
  colorWeight: PropTypes.oneOf(['darker', 'main', 'lighter', '100']),
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
  bold: PropTypes.bool
}

Typography.defaultProps = {
  colorWeight: 'main',
  color: 'primary',
  size: 'medium',
  bold: false
}
