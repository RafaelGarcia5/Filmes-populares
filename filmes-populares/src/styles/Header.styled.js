import styled from 'styled-components'

export const HeaderStyled = styled.div`
  background-color: #0d253f;
  height: 5em;
  display: flex;

  .logo {
    margin-left: 80px;
    margin-top: 16px;
    width: 254px;
    height: 46px;
  }

  .input {
    width: 20%;
    padding: 10px;
    border: none;
    border-radius: 50px;
    margin: 20px;
    margin-left: 30em;

    :active {
      border: 1px solid black;
    }
  }
`
