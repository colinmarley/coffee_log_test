//Authorization
export const SET_AUTH_STATUS = "SET_AUTH_STATUS";


//Profile
export const INIT_PROFILE = "INIT_PROFILE";


//Authorization
export const setAuthStatus = authStatus => ({
  type: SET_AUTH_STATUS,
  authStatus
});


//Profile
export const initProfile = (email, username, firstName, lastName, loginType, photo) => ({
    type: INIT_PROFILE,
    email, username, firstName,
    lastName, loginType, photo
});