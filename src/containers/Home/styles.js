import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${({ theme: { colors } }) => colors.grayscale[100]};
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const Filter = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 16px;
`

export const Input = styled.input`
  ${({ theme: { colors, borderRadius } }) => css`
    width: 300px;
    color: ${colors.grayscale.main};
    border-radius: ${borderRadius.small};
    padding: 4px 8px;
  `}
`
