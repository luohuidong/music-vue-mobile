import axios from 'axios';

export function get(url, param) {
  return axios.get(`/api${url}`, {
    param
  });
}
