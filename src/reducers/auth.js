import { SET_AUTH_STATUS } from '../actions';


const initState = {
    authStatus: false,
}

const auth = (state = initState, action) => {
    switch (action.type) {
      case SET_AUTH_STATUS:
        return ({...state, authStatus: action.authStatus});
      default:
        return state
    }
  }
  
  export default auth;