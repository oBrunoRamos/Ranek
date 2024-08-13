import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://ranekapilocal.local/wp-json/api",
});

axiosInstance.interceptors.request.use(
  function(config){
    const token = window.localStorage.token;
    if(token){
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error){
    return Promise.reject(error);
  }
)

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    axiosInstance.post(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  put(endpoint, body) {
    axiosInstance.put(endpoint, body);
  },
  login(body) {
    return axios.post(
      "http://ranekapilocal.local/wp-json/jwt-auth/v1/token",
      body
    );
  },
  validadeToken() {
    return axios.post(
      "http://ranekapilocal.local/wp-json/jwt-auth/v1/token/validate"
    );
  },
};
export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
