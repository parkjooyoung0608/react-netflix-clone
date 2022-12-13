import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "f54accda142f07cb57dec44570108cac",
    language: "ko-KR",
  },
});

export default instance;
