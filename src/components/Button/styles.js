import styled, { css } from 'styled-components'

const handleSize = {
  small: css`
    padding: 4px 8px;
  `,
  medium: css`
    padding: 8px 16px;
  `,
  large: css`
    padding: 12px 24px;
  `
}

const handleVariant = {
  contained: ({ color, theme: { colors } }) => css`
    background-color: ${colors[color].main};
    border: 1px solid ${colors[color].main};
    color: ${colors.white};
    &:hover {
      background-color: ${colors[color].darker};
    }
  `,
  outlined: ({ color, theme: { colors } }) => css`
    background-color: ${colors.white};
    border: 1px solid ${colors[color].main};
    color: ${colors[color].main};
    &:hover {
      background-color: ${colors[color][100]};
    }
  `
}

export const Button = styled.button`
  ${({ size, variant, fullWidth, theme: { colors } }) => css`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: ${fullWidth ? '100%' : 'auto'};
    ${handleSize[size]}
    ${handleVariant[variant]}
    &:disabled {
      background-color: ${colors.grayscale[100]};
      color: ${colors.grayscale[200]};
      border: 1px solid ${colors.grayscale[100]};
      cursor: default;
    }
  `}
`
