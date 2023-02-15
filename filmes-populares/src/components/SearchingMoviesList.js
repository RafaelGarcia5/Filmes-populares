import { useContext } from 'react'
import { GlobalContext } from '../global/GlobalContext'
import {
  CardMovie,
  ContainerSearchingList
} from '../styles/SearchingMovies.styled'
import { Pagination } from '@mui/material'

export default function SearchingMoviesList() {
  const context = useContext(GlobalContext)
  const {
    searchList,
    getSearchPage,
    setSearchPage,
    searchPage,
    countSearchPage
  } = context

  return (
    <div>
      <ContainerSearchingList>
        {searchList.map(movie => {
          return (
            <CardMovie key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                key={movie.id}
                alt={movie.title}
                className={'backdrop'}
              />
              <p alt={'title'} className={'titleMovie'}>
                {movie?.title}
              </p>
              <p alt={'realeseDate'} className={'realeseDate'}>
                {movie.release_date.split('-').reverse().join('/')}
              </p>
            </CardMovie>
          )
        })}
        <div>
          <Pagination
            count={countSearchPage}
            color={'primary'}
            alt="pagination selector"
            page={searchPage}
            onChange={getSearchPage}
            onClick={window.scrollTo(0, 0)}
          />
        </div>
      </ContainerSearchingList>
    </div>
  )
}
