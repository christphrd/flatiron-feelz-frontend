export default function usersReducer(
  state = { email: null, loggedIn: false, loading: false, users: [] },
  action
) {
  switch (action.type) {
    //add in loading case and additional state
    case "LOADING_USER":
      return { ...state, loading: true };
    case "LOGIN_USER":
      localStorage.setItem("jwt", action.payload.jwt);
      return {
        ...state,
        email: action.payload.email,
        loggedIn: true,
        loading: false
      };
    case "LOG_OUT_USER":
      localStorage.removeItem("jwt");
      return { ...state, email: null, loggedIn: false };
    case "SET_USERS":
      return {...state, users: action.payload}
    default:
      return state;
  }
}
