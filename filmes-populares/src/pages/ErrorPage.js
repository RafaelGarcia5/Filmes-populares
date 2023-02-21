import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/Coordinator'
import { ContainerError } from '../styles/ErrorPage.styled'

export default function ErrorPage() {
  const navigate = useNavigate()
  return (
    <ContainerError>
      <h1>ErrorPage</h1>
      <button onClick={() => goToHomePage(navigate)}>Voltar para Home</button>
    </ContainerError>
  )
}
