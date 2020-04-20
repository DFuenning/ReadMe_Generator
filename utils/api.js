// const axios = require("axios");
// require("dotenv").config();

// const api = {
//   getUser(username) {
//     return axios
//       .get(
//         `https://api.github.com/users/${username}?client_id=${
//         process.env.CLIENT_ID
//         }&client_secret=${process.env.CLIENT_SECRET}`
//       )
//       .catch(err => {
//         console.log("User Not Found")
//         process.exit(1);
//       });

//   }
// };

// module.exports = api;
const axios = require("axios");
require('dotenv').config()
const api = {
  getUser(username) {
    let auth = ""
    if (process.env.CLIENT_ID && process.env.CLIENT_SECRET) {
      auth = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    }
    const url = `https://api.github.com/users/${username}${auth}`
    return axios.get(url)
      .catch(err => {
        console.log("Error!");
        process.exit(1);
      });
  }
};
module.exports = api;