import styled from 'styled-components'

export const ContainerSearchingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto 3em;
  padding: 2em;

  .containerPagination {
    margin-top: 32px;
    margin-bottom: 32px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    @media (max-width: 500px) {
      .containerPagination {
        padding: 0;
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export const CardMovie = styled.div`
  margin: 1.5em;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #efefef;
    width: 310px;
    height: 510px;
    margin: 0;
    box-shadow: 10px 10px 5px #aaaaaa;
    border-radius: 10px;
    animation: CardMovie 0.3s linear both;
    @keyframes CardMovie {
      100% {
        transform: scale(1.1);
      }
    }
  }

  .backdrop {
    width: 300px;
    height: 440px;
    margin: 3px;
    border-radius: 10px;
  }

  .titleMovie {
    font-family: 'Roboto';
    font-style: bold;
    color: #000000;
    margin: 3px;
    margin-left: 7px;
  }

  .realeseDate {
    font-family: 'Roboto';
    font-style: bold;
    color: #646464;
    margin: 3px;
    margin-bottom: 5px;
    margin-left: 7px;
  }
`
