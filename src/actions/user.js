const loginURL = `http://localhost:3000/api/v1/login`
const signUpURL = `http://localhost:3000/api/v1/signup`

export function signInUser(email, password) {
  let loginObject = {
    email: email,
    password: password
  }

  return dispatch => {
    fetch(loginURL, {
      method: 'POST',
      body: JSON.stringify(loginObject),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    //goes to another function in this file to send to usersReducer
    .then(json => {dispatch(loginUser(json))})
  }
}

export function signUpUser(signUpObject) {
  //use thunk here
  return dispatch => {
    fetch(signUpURL, {
      method: 'POST',
      body: JSON.stringify(signUpObject),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => dispatch(loginUser(json)))
  }
}

export function loginUser(userData) {
  console.log(userData)
  return {
    type: "LOGIN_USER",
    payload: userData
  };
}

export function logOutUser() {
  return {
    type: "LOG_OUT_USER"
  };
}

/*export function loadingUser() {
  return {
    type: "LOADING_USER"
  };
}

export function getCurrentUser() {
  return dispatch => {
    dispatch(loadingUser());
    fetch("http://localhost:3000/api/v1/current_user", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
      .then(response => response.json())
      .then(userData => dispatch(loginUser(userData)));
  };
}


export function setUsers(usersData) {
  return {
    type: "SET_USERS",
    payload: usersData
  }
}

export function getUsers() {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/users', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
    .then(response => response.json())
    .then(users => dispatch(setUsers(users)))
  }
}*/
