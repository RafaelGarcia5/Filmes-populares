import { useContext } from 'react'
import { GlobalContext } from '../global/GlobalContext'
import {
  CardMovie,
  ContainerSearchingList
} from '../styles/SearchingMovies.styled'
import { Pagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { goDetailPage } from '../routes/Coordinator'

export default function SearchingMoviesList() {
  const context = useContext(GlobalContext)
  const { searchList, getSearchPage, searchPage, countSearchPage, setQuery } =
    context
  const navigate = useNavigate()

  return (
    <div>
      <ContainerSearchingList>
        {searchList.map(movie => {
          return (
            <CardMovie
              key={movie.id}
              onClick={() => {
                goDetailPage(navigate, movie.id)
                setQuery('')
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                key={movie.id}
                alt={movie.title}
                className={'backdrop'}
              />
              <h4 alt={'title'} className={'titleMovie'}>
                {movie?.title}
              </h4>
              <h4 alt={'realeseDate'} className={'realeseDate'}>
                {movie.release_date.split('-').reverse().join('/')}
              </h4>
            </CardMovie>
          )
        })}
        <div className={'containerPagination'}>
          <Pagination
            count={countSearchPage}
            size="small"
            color={'primary'}
            alt="pagination selector"
            page={searchPage}
            siblingCount={0}
            boundaryCount={1}
            onChange={getSearchPage}
            onClick={window.scrollTo(0, 0)}
          />
        </div>
      </ContainerSearchingList>
    </div>
  )
}
