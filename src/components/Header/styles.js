import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    flex: 1;
    max-height: 60px;
    background-color: ${colors.secondary.main};
  `}
`
