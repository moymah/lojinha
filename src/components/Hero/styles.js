import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    width: 70%;
    max-width: 800px;
    margin: 16px;
    background-color: ${colors.black};
  `}
`

export const CarouselItem = styled.div`
  ${({ picture }) => css`
    width: 100%;
    height: 350px;
    background-image: url(${picture});
    background-size: cover;
  `}
`
