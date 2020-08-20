import axios from 'axios'

const UPDATE_USER = 'UPDATE_USER'

const initialState = {
  currentUser: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        currentUser: action.user,
      }

    default:
      return state
  }
}

export function updateUser(user) {
  return { type: UPDATE_USER, user }
}

export function getCurrentUser() {
  return (dispatch) =>
    axios
      .get('/api/v1/current_user.json', { withCredentials: true })
      .then((resp) => {
        console.log('current_user from server: ', resp.data.user)
        dispatch(updateUser(resp.data.user))
      })
      .catch((err) => {
        console.log(err)
        window.location.replace('/users/sign_in')
      })
}

export function signOut() {
  return (dispatch) =>
    axios
      .get('/api/v1/log_out.json', { withCredentials: true })
      .then(() => {
        window.location.replace('/users/sign_in')
      })
      .catch(() => {
        window.location.replace('/users/sign_in')
      })
}
