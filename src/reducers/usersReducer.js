export default function usersReducer(
  state = { userID: null, email: null, firstName: null, lastName: null, loggedIn: false, loading: false, users: [] },
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
        userID: action.payload.id,
        email: action.payload.email,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        loggedIn: !!(action.payload.jwt),
        // loggedIn: true,
        loading: false
      };
    case "LOG_OUT_USER":
      localStorage.removeItem("jwt");
      return { userID: null, email: null, firstName: null, lastName: null, loggedIn: false, loading: false, users: [] };
    // case "SET_USERS":
    //   return {...state, users: action.payload}
    default:
      return state;
  }
}
