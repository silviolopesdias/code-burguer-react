import ReactSelect from 'react-select'

import styled from 'styled-components'
export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
`
export const ProductsImg = styled.img`
  width: 60px;
  border-radius: 5px;
`
export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;
  .css-qbdosj-Input {
    cursor: pointer;
  }
`
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
  border-bottom: ${props =>
    props.isActiveStatus ? '3px solid #9758A6' : 'none'};
  padding-bottom: 5px;
`
