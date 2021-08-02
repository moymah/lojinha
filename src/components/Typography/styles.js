import styled, { css } from 'styled-components'

export const Typography = styled.p`
  ${({ color, colorWeight, bold, size, theme: { fontSizes, colors } }) => css`
    font-size: ${fontSizes[size]};
    color: ${colors[color][colorWeight]};
    font-weight: ${bold ? 'bold' : 'normal'};
  `}
`
