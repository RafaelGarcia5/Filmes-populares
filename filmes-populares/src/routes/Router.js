import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailPage from '../pages/DetailPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/datails/:id'} element={<DetailPage />} />
        <Route path={'*'} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
