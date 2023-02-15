import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from '../providers/Base_url'
import KEY from '../providers/Key'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [searchList, setSearchList] = useState([])
  const [searchPage, setSearchPage] = useState(1)
  const [countSearchPage, setCountsSerachPage] = useState()

  const fetchMovies = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/movie/popular${KEY}&page=${page}`
      )
      setMovies(res.data.results)
    } catch (error) {
      // console.log('ERRO', error.response)
    }
  }

  const getPage = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    fetchMovies()
  }, [page])

  const getWantedMovies = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/search/movie${KEY}&language=en-US&query=${query}`
      )
      setCountsSerachPage(res.data.total_pages)
      setSearchList(res.data.results)
    } catch (error) {
      // console.log('ERRO', error.response)
    }
  }

  const getSearchPage = (event, value) => {
    setSearchPage(value)
  }

  useEffect(() => {
    getWantedMovies()
  }, [query, searchPage])

  const context = {
    movies,
    getPage,
    page,
    setPage,
    setQuery,
    query,
    searchList,
    searchPage,
    setSearchPage,
    getSearchPage,
    countSearchPage
  }

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  )
}
