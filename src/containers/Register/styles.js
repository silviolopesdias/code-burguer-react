import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterImage = styled.img`
  height: 90%;
`
export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 90%;

  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
    margin-top: 50px;
  }
`
export const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #ffffff;
  margin-top: ${props => (props.error ? '12px' : '28px')};
  margin-bottom: 3px;
`
export const Input = styled.input`
  width: 390px;
  height: 38px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 3px 3px 10px 0px #4a90e230;
  border: ${props => (props.error ? ' 2px solid #cc1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  font-style: normal;
  color: #ffffff;
  margin-top: 15px;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
