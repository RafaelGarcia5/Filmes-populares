import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../global/GlobalContext'
import logo from '../images/logo.svg'
import { goToHomePage } from '../routes/Coordinator'
import { HeaderStyled } from '../styles/Header.styled'

export default function Header() {
  const context = useContext(GlobalContext)
  const { query, setQuery } = context
  const navigate = useNavigate()

  return (
    <div>
      <HeaderStyled>
        <img
          className={'logo'}
          src={logo}
          alt={'logo'}
          onClick={() => goToHomePage(navigate)}
        />
        <input
          className="input"
          type="search"
          placeholder="Pesquisar"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </HeaderStyled>
    </div>
  )
}
