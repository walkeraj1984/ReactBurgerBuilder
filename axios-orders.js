import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-26dde.firebaseio.com/"
});

export default instance;
