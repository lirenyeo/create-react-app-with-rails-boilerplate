import React from 'react'
import { connect } from 'react-redux'
import { Switch } from 'react-router'
import { getCurrentUser } from '../ducks/auth'

class AuthContainer extends React.Component {
  componentDidMount() {
    const { currentUser, checkCurrentUser } = this.props
    console.log(currentUser)
    if (!currentUser) {
      checkCurrentUser()
    }
  }

  render() {
    const { currentUser, children } = this.props

    if (!currentUser) {
      return null
    } else {
      return <Switch>{children}</Switch>
    }
  }
}

const mapStateToProps = (state) => ({ currentUser: state.auth.currentUser })

const mapDispatchToProps = (dispatch) => ({
  checkCurrentUser: () => dispatch(getCurrentUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
