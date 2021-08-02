import PropTypes from 'prop-types'
import * as S from './styles'

export const Button = ({
  children,
  fullWidth,
  size,
  color,
  variant,
  ...props
}) => {
  return (
    <S.Button
      {...props}
      fullWidth={fullWidth}
      size={size}
      color={color}
      variant={variant}
    >
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'grayscale']),
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Button.defaultProps = {
  fullWidth: false,
  color: 'primary',
  variant: 'contained',
  size: 'medium'
}
