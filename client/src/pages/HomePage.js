import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../ducks/auth'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomePageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5%;

  button, a {
    margin: 5px;
  }
`

export default function HomePage() {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.auth.currentUser)

  return (
    <HomePageWrapper>
      <h1>Welcome to Home Page</h1>
      <p>You are logged in as {currentUser.email}</p>
      <a href="/admin" className="btn btn-warning">
        Go to ActiveAdmin dashboard
      </a>

      <Link className="btn btn-info" to="/welcome">
        Visit Public Page
      </Link>

      <button
        className="btn btn-outline-danger"
        onClick={() => {
          dispatch(signOut())
        }}
      >
        Log Out
      </button>
    </HomePageWrapper>
  )
}
