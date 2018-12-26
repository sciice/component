import axios from './request';

export async function index(url, size = null) {
  if (size) {
    return axios(`${url}?page=${size}`);
  }
  return axios(url);
}

export function store(url, values) {
  return axios.post(url, values);
}

export function update(url, id, values) {
  return axios.put(`${url}/${id}`, values);
}

export function show(url, id) {
  return axios.get(`${url}/${id}`);
}

export function destroy(url, id) {
  return axios.delete(`${url}/${id}`);
}
