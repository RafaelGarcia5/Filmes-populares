import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import ReactPlayer from 'react-player'
import { useNavigate, useParams } from 'react-router-dom'
import BASE_URL from '../providers/Base_url'
import KEY from '../providers/Key'
import { goDetailPage } from '../routes/Coordinator'
import { ContainerDetails } from '../styles/DeatailMovie.styled'

export default function DetailMovie() {
  const [detailsMovie, setDeatilsMovie] = useState({})
  const [age, setAge] = useState({})
  const [cast, setCast] = useState([])
  const [trailer, setTraler] = useState([])
  const [recomendations, setRecomendation] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  const fetchDeatilsMovies = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/movie/${id}${KEY}&language=pt-BR`
      )
      setDeatilsMovie(res.data)
    } catch (error) {
      console.log('ERRO', error.response)
    }
  }

  const fetchAge = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/movie/${id}/release_dates${KEY}&language=pt-BR`
      )
      const data = res.data.results
      for (let obj of data) {
        if (obj.iso_3166_1 === 'BR') {
          setAge(obj)
        }
      }
    } catch {}
  }

  const fetchDirection = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/movie/${id}/credits${KEY}&language=pt-BR`
      )
      setCast(res.data)
    } catch (error) {
      console.log('ERRO', error.response)
    }
  }

  const fetchTrailer = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/movie/${id}/videos${KEY}&language=pt-BR`
      )
      setTraler(res.data.results)
    } catch (error) {
      console.log('ERRO', error.response)
    }
  }

  const fetchRecometions = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/movie/${id}/recommendations${KEY}&language=pt-BR`
      )
      setRecomendation(res.data.results)
    } catch (error) {
      console.log('ERRO', error.response)
    }
  }

  useEffect(() => {
    fetchDeatilsMovies()
  }, [])

  useEffect(() => {
    fetchAge()
  }, [])

  useEffect(() => {
    fetchDirection()
  }, [])

  useEffect(() => {
    fetchTrailer()
  }, [])

  useEffect(() => {
    fetchRecometions()
  }, [])

  const convertPorcent = number => {
    return (number / 10) * 100
  }

  const porcentage = convertPorcent(detailsMovie?.vote_average)
    .toString()
    .substring(0, 4)

  const convertTime = runtime => {
    const hours = Math.floor(runtime / 60)
    let minutes = runtime % 60
    minutes = minutes < 10 ? '0' + minutes : minutes
    return `${hours}h${minutes}m`
  }

  const runtime = convertTime(detailsMovie.runtime)

  return (
    <div>
      <ContainerDetails>
        <div className={'hederDetails'}>
          <img
            className={'poster'}
            src={`https://image.tmdb.org/t/p/w500/${detailsMovie.poster_path}`}
            alt={detailsMovie.title}
          />
          <div className={'detailsMovie'}>
            <h1>
              {detailsMovie.title} (
              {detailsMovie?.release_date?.substring(0, 4)})
            </h1>
            <div className={'aboutMovie'}>
              <div alt={'age'}>
                {age?.release_dates?.[0]?.certification === 'L' ? (
                  <p>Livre</p>
                ) : (
                  <div>
                    {age?.release_dates?.[0]?.certification === undefined ||
                    '' ? (
                      <p>indisponivel</p>
                    ) : (
                      <p>{`${age?.release_dates?.[0]?.certification} Anos`}</p>
                    )}
                  </div>
                )}{' '}
              </div>

              <p className={'pointer'}>•</p>

              <p className={'realesed'}>
                {detailsMovie?.release_date?.split('-').reverse().join('/')}{' '}
                (BR)
              </p>

              <p className={'pointer'}>•</p>

              <div className={'genres'}>
                {detailsMovie?.genres?.map(gen => {
                  return (
                    <p key={gen.id} className={'genre'}>
                      {gen.name}{' '}
                    </p>
                  )
                })}
              </div>

              <p className={'pointer'}>•</p>

              <p>{runtime}</p>
            </div>

            <div className={'containerAvaliation'}>
              <div className={'avaliation'}>
                <CircularProgressbar
                  key={detailsMovie.vote_average}
                  value={porcentage}
                  text={`${porcentage}%`}
                  styles={buildStyles({
                    pathColor: `#14FF00`,
                    textColor: '#14FF00',
                    trailColor: '#0D253F',
                    backgroundColor: '#42246D',
                    textSize: '24px'
                  })}
                />
              </div>
              <h3 className={'avaliationUser'}>Avaliação dos usuarios</h3>
            </div>

            <div className={'containerSumary'}>
              <h3 className={'sumaryTitle'}>Sinopse</h3>
              <p className={'sumary'}>{detailsMovie.overview}</p>
            </div>
            <div className={'direction'}>
              {cast.crew
                ?.filter(i => {
                  return (
                    i.job === 'Screenplay' ||
                    i.job === 'Director' ||
                    i.job === 'Characters'
                  )
                })
                .map(direct => {
                  return (
                    <div key={direct?.id} className={'directCard'}>
                      <h3>{direct?.name}</h3>
                      <p>{direct?.job}</p>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>

        <div className={'moreDetails'}>
          <h2 className={'CastElenco'}>Elenco</h2>
          <div className={'castCards'}>
            {cast?.cast?.map(cast => {
              return (
                <div className={'cast'} key={cast.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${cast?.profile_path}`}
                  />
                  <h3 className={'castName'}>{cast?.name}</h3>
                  <p className={'castCharacter'}>{cast?.character}</p>
                </div>
              )
            })}
          </div>
        </div>

        <h2 className={'trailer'}>Trailer</h2>
        <div className={'containerTrailer'}>
          {trailer
            ?.filter(i => {
              return i?.type === 'Trailer'
            })
            .map(trailer => {
              return (
                <div className={'player'} key={trailer.id}>
                  <ReactPlayer
                    className={'reactPlayer'}
                    key={'youtube'}
                    url={`https://www.youtube.com/watch?v=${trailer?.key}`}
                    width="26rem"
                    height="18rem"
                  />
                </div>
              )
            })}
        </div>

        <h2 className={'recomendations'}>Recomendações</h2>
        <div className={'ContainerRecomendatios'}>
          {recomendations.map(movie => {
            return (
              <div
                key={movie.id}
                className={'cardRecomendation'}
                onClick={() => {
                  goDetailPage(navigate, movie.id)
                  window.location.reload()
                  window.scrollTo(0, 0)
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className={'backdropRecomedations'}
                />
                <h4 alt={'title'} className={'titleMovie'}>
                  {movie?.title}
                </h4>
                <h4 alt={'realeseDate'} className={'realeseDate'}>
                  {movie.release_date.split('-').reverse().join('/')}
                </h4>
              </div>
            )
          })}
        </div>
      </ContainerDetails>
    </div>
  )
}
