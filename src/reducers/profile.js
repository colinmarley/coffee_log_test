import { INIT_PROFILE } from '../actions';

const initState = {
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    loginType: undefined,
    photo: "",
}

const profile = (state = initState, action) => {
    switch(action.type) {
        case INIT_PROFILE:
            return {
                ...state,
                email: action.email,
                username: action.username,
                firstName: action.firstName,
                lastName: action.lastName,
                loginType: action.loginType,
                photo: action.photo
            }
        default:
            return state;
    }
}

export default profile;

