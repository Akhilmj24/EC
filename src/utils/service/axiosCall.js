import axios from "axios";
import { baseUrl } from "./api";
const userInfo = JSON.parse(sessionStorage.getItem("user"));
export const postApi = async (data, url) => {
  console.log(url);
  const res = await axios.post(`${baseUrl}${url}`, data, {
    headers: {
      access_token: userInfo?.token,
    },
  });
  return res.data;
};

export const getApi = () => {};