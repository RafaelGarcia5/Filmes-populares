import { useContext } from 'react'
import DetailMovie from '../components/DetailMovie'
import Header from '../components/Header'
import SearchingMoviesList from '../components/SearchingMoviesList'
import { GlobalContext } from '../global/GlobalContext'
import { ContainerDetailPage } from '../styles/DetailPage.styled'

export default function DetailPage() {
  const context = useContext(GlobalContext)
  const { searchList } = context
  return (
    <ContainerDetailPage>
      <Header />
      {searchList.length > 0 ? <SearchingMoviesList /> : <DetailMovie />}
    </ContainerDetailPage>
  )
}
