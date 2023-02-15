import React, { useContext } from 'react'
import { GlobalContext } from '../global/GlobalContext'
import logo from '../images/logo.svg'
import { HeaderStyled } from '../styles/Header.styled'

export default function Header() {
  const context = useContext(GlobalContext)
  const { query, setQuery } = context

  return (
    <div>
      <HeaderStyled>
        <img className={'logo'} src={logo} alt={'logo'} />
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
