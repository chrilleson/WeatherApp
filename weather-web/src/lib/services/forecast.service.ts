import http from './http.service'

export function getForecast() {
  return http.get('/weatherforecast').then((res) => res.data);
}