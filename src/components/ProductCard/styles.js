import styled, { css } from 'styled-components'

export const ProductImage = styled.img`
  ${({ theme: { borderRadius } }) => css`
    width: 120px;
    border-radius: ${borderRadius.small};
    margin: 8px 0;
  `}
`

export const KnowMore = styled.div`
  right: 0;
  top: 45%;
  opacity: 0;
  position: absolute;
  transition: right ease-in-out 0.1s;
`

export const Container = styled.div`
  ${({ theme: { colors, borderRadius, effects } }) => css`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    width: 230px;
    margin: 8px;
    padding: 8px;
    background-color: ${colors.white};
    border-radius: ${borderRadius.small};
    box-shadow: ${effects.boxShadow};

    &:hover ${ProductImage} {
      filter: brightness(0.8);
    }

    &:hover ${KnowMore} {
      right: 20px;
      opacity: 1;
    }
  `}
`

export const Content = styled.div`
  ${({ theme: { borderRadius } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: ${borderRadius.small};
    justify-content: space-between;
    height: 100%;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `}
`

export const Title = styled.div`
  min-height: 48px;
  display: flex;
  align-items: center;
`

export const Value = styled.div`
  display: flex;
  align-items: baseline;
`

export const PlatformContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Platform = styled.div`
  ${({ theme: { colors } }) => css`
    border-bottom: 2px solid ${colors.primary.main};
    margin: 4px 8px;
  `}
`
