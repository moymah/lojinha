import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import PropTypes from 'prop-types'
import * as S from './styles'

export const Hero = ({ hero }) => {
  return (
    <S.Container>
      <Carousel infiniteLoop autoPlay emulateTouch showThumbs={false}>
        {hero.map(({ name, picture }) => (
          <S.CarouselItem key={`${name}_hero`} picture={picture} />
        ))}
      </Carousel>
    </S.Container>
  )
}

Hero.propTypes = {
  hero: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      value: PropTypes.number,
      release_date: PropTypes.string,
      platform: PropTypes.arrayOf(PropTypes.string),
      picure: PropTypes.string,
      id: PropTypes.number
    })
  ).isRequired
}
