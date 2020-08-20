import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../ducks/auth'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.auth.currentUser)

  return (
    <>
      <h1>Welcome to Home Page</h1>
      <p>You are logged in as {currentUser.email}</p>
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          dispatch(signOut())
        }}
      >
        Log Out
      </button>
      <a href="/admin" className="btn btn-warning">
        Go to ActiveAdmin dashboard
      </a>
    </>
  )
}
