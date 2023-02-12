import { apiAuth } from "../../utils/service/api";
import { postApi } from "../../utils/service/axiosCall";

export const handlelogin = async (data) => {
 return postApi(data, apiAuth.login);
};
export const handleRegister = async (data) => {
 return postApi(data, apiAuth.registration);
};
