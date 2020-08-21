import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PublicPageWrapper = styled.article`
  padding: 1em;
`

export default function PublicPage() {
  return (
    <PublicPageWrapper>
      <h1>Public Page</h1>
      <p>This page can be accessed by anyone without logging in.</p>

      <Link to='/' className="btn btn-outline-primary btn-lg">Enter App</Link>
    </PublicPageWrapper>
  )
}