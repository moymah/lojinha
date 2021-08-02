import styled from 'styled-components'

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
