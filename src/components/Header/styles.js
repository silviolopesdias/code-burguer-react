import styled from 'styled-components'

export const Container = styled.div`
  height: 78px;
  box-shadow: 2px 3px 5px 0px #00000026;
  background: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`
export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`
export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`
export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`
export const ContainerText = styled.div`
  p {
    color: #555555;
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    letter-spacing: 0em;
  }
`
export const PageLinkExit = styled.a`
  color: #9758a6;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`
