import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImage = styled.img``
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`
export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  margin-top: 16px;
  background: #9758a6;
  box-shadow: 0px 20px 40px 0px #9758a63d;
  border-radius: 8px;
  border: none;
  height: 50px;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`
