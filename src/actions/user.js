import { baseURL } from '../constants';

// const baseURL = `https://floating-wildwood-28213.herokuapp.com/`
// const baseURL = `http://localhost:3000/`
// const loginURL = `http://localhost:3000/api/v1/login`
// const signUpURL = `http://localhost:3000/api/v1/signup`
// const currentUserURL = `http://localhost:3000/api/v1/current_user`

export function signInUser(email, password) {
  let loginObject = {
    email: email,
    password: password
  }

  return dispatch => {
    fetch(`${baseURL}api/v1/login`, {
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
    fetch(`${baseURL}api/v1/signup`, {
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

//check from App.js to see if already loggedIn so it won't show the welcome page
export function getCurrentUser() {
  return dispatch => {
    dispatch(loadingUser());
    fetch(`${baseURL}api/v1/current_user`, {
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

//loading is used for when fetch request is checking with the backend
export function loadingUser() {
  return {
    type: "LOADING_USER"
  };
}



/*export function setUsers(usersData) {
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
