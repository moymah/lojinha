import PropTypes from 'prop-types'
import * as S from './styles'

export const Loading = ({ isLoading, children }) =>
  isLoading ? (
    <S.Circle>
      <div>N</div>
    </S.Circle>
  ) : (
    children
  )

Loading.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired
}
