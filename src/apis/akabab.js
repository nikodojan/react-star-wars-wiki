import axios from "axios";

export default axios.create({
  baseURL: 'https://akabab.github.io/starwars-api/api'
})