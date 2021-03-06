import axios from "axios";

export default {
  user: {
    login: credentials => new Promise((resolve) => {
        const username = credentials.username;
        const password = credentials.password;
        const rememberMe = false;

        resolve(axios.post("http://localhost:8080/api/authenticate", { username, password, rememberMe }).then(res => res.data));
      })
    ,
    signup: user =>
      axios.post("/api/users", { user }).then(res => res.data.user),
    confirm: token =>
      axios
        .post("/api/auth/confirmation", { token })
        .then(res => res.data.user),
    resetPasswordRequest: email =>
      axios.post("/api/auth/reset_password_request", { email }),
    validateToken: token => axios.post("/api/auth/validate_token", { token }),
    resetPassword: data => axios.post("/api/auth/reset_password", { data })
  },
  books: {
    fetchAll: () => axios.get("/api/books").then(res => res.data.books),
    create: book =>
      axios.post("/api/books", { book }).then(res => res.data.book)
  }
};
