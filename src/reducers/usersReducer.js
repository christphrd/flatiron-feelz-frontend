export default function usersReducer(
  state = { email: null, firstName: null, lastName: null, loggedIn: false, loading: false, users: [] },
  action
) {
  switch (action.type) {
    case "LOADING_USER":
      return { ...state, loading: true };
    case "LOGIN_USER":
      //prevent anyone from logging in because jwt token was undefined
      if (action.payload.jwt){
        localStorage.setItem("jwt", action.payload.jwt);
      }
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        loggedIn: !!(action.payload.jwt),
        // loggedIn: true,
        loading: false
      };
    // case "LOG_OUT_USER":
    //   localStorage.removeItem("jwt");
    //   return { ...state, email: null, firstName: null, lastName: null, loggedIn: false };
    // case "SET_USERS":
    //   return {...state, users: action.payload}
    default:
      return state;
  }
}
