import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(660deg);
  }
`

export const Circle = styled.div`
  ${({ theme: { colors, borderRadius } }) => css`
    display: inline-block;
    transform: translateZ(1px);
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      font-weight: bold;
      color: ${colors.white};
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: ${borderRadius.rounded};
      background: red;
      animation: ${rotate} 3s infinite alternate;
    }
  `}
`
