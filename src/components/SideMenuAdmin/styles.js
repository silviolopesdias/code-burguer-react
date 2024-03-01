import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 80px 15px;
  }
`
export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${props => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;
  margin-bottom: 30px;

  .icon {
    color: #ffff;
  }
`
export const ListLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 19px;
  color: #ffffffff;
  margin-left: 12px;
`
