export const baseUrl = "http://localhost:5000/api/";
export const baseUrlImage = "http://localhost:5000/";
const userinfo = JSON.parse(sessionStorage.getItem("user"));

export const apiAuth = {
  login: "auth/login",
  registration: "auth/register",
  update: `auth/updateprofile/${userinfo?.details._id}`,
  getuser: `auth/${userinfo?.details?._id}`,
  updatecart: `auth/updateprofile/${userinfo?.details._id}`,
};
export const apiProduct = {
  getproduct: `product/`,
  getproductbyid: `product/find/`,
  createorder:`payment/createorder`,
  getrazorpay:`payment/`,
  placeorder:`payment/placeorder`
};
