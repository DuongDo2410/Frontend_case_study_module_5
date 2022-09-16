import { axiosConfig } from "./axios";

const authApi = {
  logIn(user) {
    const url = `/login`;
    return axiosConfig.post(url, user);
  },
  regiter(user) {
    const url = `/register`;
    return axiosConfig.post(url, user);
  },
};
export default authApi;
