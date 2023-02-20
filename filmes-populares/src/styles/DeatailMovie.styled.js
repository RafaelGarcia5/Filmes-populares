import styled from 'styled-components'

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  font-style: Bold;

  .hederDetails {
    height: 740px;
    width: 100%;
    background-color: #0d1b3f;
    display: flex;
    color: #fff;

    .poster {
      margin: 100px;
      width: 470px;
      height: 700px;
      margin-right: 60px;
      border-radius: 5px;
    }

    .detailsMovie {
      margin-top: 120px;
      margin-right: 100px;

      .aboutMovie {
        margin-top: 20px;
        display: flex;
        flex-direction: row;

        .age {
        }
        .pointer {
          margin-left: 4px;
          margin-right: 4px;
        }
        .realesed {
        }
        .genres {
          display: flex;
          flex-direction: row;
          .genre {
            margin-left: 3px;
            margin-right: 3px;
          }
        }
      }
    }
  }
  .containerAvaliation {
    display: flex;
    flex-direction: row;
    align-items: center;

    .avaliation {
      margin-top: 10px;
      margin-bottom: 10px;
      margin-right: 10px;
      width: 100px;
      height: 100px;

      .CircularProgressbar .CircularProgressbar-text {
        text-anchor: middle;
        dominant-baseline: middle;
        font-size: 32px;
      }
    }
  }

  .containerSumary {
    margin-top: 20px;
    margin-bottom: 20px;

    .sumaryTitle {
      margin-bottom: 10px;
    }

    .sumary {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .direction {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;

    .directCard {
      margin-right: 32px;
      margin-top: 10px;
    }
  }

  .moreDetails {
    margin-top: 120px;
    .CastElenco {
      margin-bottom: 0;
      margin-left: 90px;
    }
  }

  .castCards {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    margin: 74px;
    margin-top: 0;

    .cast {
      display: flex;
      flex-direction: column;
      margin: 15px;
      box-shadow: 10px 10px 5px #aaaaaa;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background-color: #fff;

      img {
        width: 270px;
        height: 320px;
        margin: 5px;
        border-bottom: 10px;
      }

      .character {
        margin: 3px;
      }
      .castCharacter {
        margin: 3px;
        margin-bottom: 7px;
      }
    }
  }

  .trailer {
    margin-bottom: 0;
    margin-left: 90px;
  }

  .containerTrailer {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    margin: 74px;
    margin-top: 0;

    .player {
      width: 600px;
      margin: 15px;
    }
  }

  .ContainerRecomendatios {
    display: flex;
    flex-direction: row;
    padding-top: 30px;
    padding-bottom: 5px;
    overflow-x: scroll;
    margin-left: 74px;
    margin-right: 74px;
    margin-bottom: 100px;

    .cardRecomendation {
      margin: 1.5em;
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 500px;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;

      .backdropRecomedations {
        width: 300px;
        height: 440px;
        margin: 3px;
        border-radius: 10px;
      }

      :hover {
        background-color: #fff;
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
    }
  }
`
