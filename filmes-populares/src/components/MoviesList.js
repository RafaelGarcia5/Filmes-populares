import React, { useContext } from 'react'
import { GlobalContext } from '../global/GlobalContext'
import { CardMovie, ContainerList } from '../styles/MovieList.styled'
import { Pagination } from '@mui/material'

export default function MoviesList() {
  const context = useContext(GlobalContext)
  const { movies, getPage, page } = context

  return (
    <div>
      <ContainerList>
        {movies.map(movie => {
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
