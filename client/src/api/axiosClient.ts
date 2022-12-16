import axios from "axios";

function getToken() {
  const userToken = JSON.parse(localStorage.getItem("userInfo") || "{}");
  return userToken.access_token;
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: { Authorization: `Bearer ${getToken()}` },
});

export default instance;
