import React from 'react'
import { Link } from 'react-router-dom'

export default function PublicPage() {
  return (
    <>
      <h1>Public Page</h1>
      <p>Can be accessed by anyone without logging in</p>
      <Link to='/' className="btn btn-primary">Enter App</Link>
    </>
  )
}