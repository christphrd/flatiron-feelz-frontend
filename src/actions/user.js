const loginURL = `http://localhost:3000/api/v1/login`

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
  // return dispatch => {
  //   fetch(loginURL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         email,
  //         password
  //       }
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(userData => {
  //       dispatch(loginUser(userData));
  //     });
  // };
}

// export function loginError(json) {
//   debugger;
// }

export function signUpUser(email, password) {
  //use thunk here
  return dispatch => {
    fetch("http://localhost:3000/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password
        }
      })
    })
      .then(response => response.json())
      .then(userData => {
        dispatch(loginUser(userData));
      });
  };
}

export function loginUser(userData) {
  console.log(userData)
  return {
    type: "LOGIN_USER",
    payload: userData
  };
}

export function loadingUser() {
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

export function logOutUser() {
  return {
    type: "LOG_OUT_USER"
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
}
