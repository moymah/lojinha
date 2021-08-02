import styled, { css } from 'styled-components'

export const ToggleButton = styled.button`
  ${({ theme: { colors, borderRadius } }) => css`
    display: flex;
    padding: 8px;
    border: none;
    cursor: pointer;
    border-radius: ${borderRadius.large};
    color: ${colors.grayscale.main};
    background-color: ${colors.grayscale[100]};
    transition: ease-in-out 0.3s;
    &:hover {
      color: ${colors.primary.darker};
      background-color: ${colors.grayscale.darker};
    }
  `}
`

export const Content = styled.div`
  position: relative;
`

export const Container = styled.div`
  ${({ theme: { colors, borderRadius } }) => css`
    position: absolute;
    top: 42px;
    right: 0px;
    width: 600px;
    max-height: 400px;
    z-index: 2;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: none;
    border-radius: ${borderRadius.large};
    color: ${colors.grayscale.main};
    background-color: ${colors.white};
    transition: ease-in-out 0.3s;
  `}
`

export const EmptyState = styled.div`
  ${({ theme: { colors, borderRadius } }) => css`
    position: absolute;
    top: 42px;
    right: 0px;
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 16px;
    background-color: ${colors.white};
    border-radius: ${borderRadius.large};
  `}
`
