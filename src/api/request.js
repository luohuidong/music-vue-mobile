import axios from "axios";

export function get(url, params) {
  return axios.get(`/api${url}`, {
    params
  });
}
