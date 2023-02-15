import React, { useContext } from 'react'
import Header from '../components/Header'
import MoviesList from '../components/MoviesList'
import SearchingMoviesList from '../components/SearchingMoviesList'
import { GlobalContext } from '../global/GlobalContext'

export default function HomePage() {
  const context = useContext(GlobalContext)
  const { searchList } = context

  return (
    <div>
      <Header />
      {searchList.length > 0 ? <SearchingMoviesList /> : <MoviesList />}
    </div>
  )
}
