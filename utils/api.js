const axios = require("axios");
require("dotenv").config();
// {
//   path: './.env'
// }
const api = {
  getUser(username) {
    return axios
      .get(
        `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
      )
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log("User Not Found")
        process.exit(1);
      });

  }
};

module.exports = api;
