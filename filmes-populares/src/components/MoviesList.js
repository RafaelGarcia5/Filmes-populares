import React, { useContext } from 'react'
import { GlobalContext } from '../global/GlobalContext'
import { CardMovie, ContainerList } from '../styles/MovieList.styled'
import { Pagination } from '@mui/material'
import { useNavigate } from 'react-router'
import { goDetailPage } from '../routes/Coordinator'

export default function MoviesList() {
  const context = useContext(GlobalContext)
  const { movies, getPage, page } = context
  const navigate = useNavigate('')

  return (
    <div>
      <ContainerList>
        {movies.map(movie => {
          return (
            <CardMovie
              key={movie.id}
              onClick={() => {
                goDetailPage(navigate, movie.id)
                window.scrollTo(0, 0)
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
            size="small"
            count={500}
            color={'primary'}
            alt="pagination selector"
            page={page}
            onChange={getPage}
            onClick={window.scrollTo(0, 0)}
          />
        </div>
      </ContainerList>
    </div>
  )
}
