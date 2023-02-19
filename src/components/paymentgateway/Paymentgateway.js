import axios from "axios";
import { apiProduct, baseUrl } from "../../utils/service/api";

export const orderPayment = (totalAmount, products, user) => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";

  script.onerror = () => {
    alert("Razorpay SDK failed to load. Are you online?");
  };
  script.onload = async () => {
    try {
      const result = await axios.post(`${baseUrl}${apiProduct.createorder}`, {
        amount: totalAmount * 100,
      });

      const { amount, id: order_id, currency } = result.data;
      const {
        data: { key: razorpayKey },
      } = await axios.get(`${baseUrl}${apiProduct.getrazorpay}`);

      const options = {
        key: razorpayKey,
        amount: amount,
        currency: currency,
        name: "RiBu",
        order_id: order_id,
        handler: async function (response) {
          const results = await axios
            .post(`${baseUrl}${apiProduct.placeorder}`, {
              userId: user?._id,
              phone: user?.mobile,
              address: user?.address,
              orderstatus: "Order Placed",
              products: products,
              amount: totalAmount,
              paymentmode: "ONLINE",
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            })
            .then((res) => console.log(res));
        },
        prefill: {
          name: user?.name,
          email: user?.email,
          contact: user?.mobile,
        },
        // notes: {
        //   address: address,
        // },
        // theme: {
        //   color: "#80c0f0",
        // },
      };

      // setLoading(false);
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      alert(err);
      // setLoading(false);
    }
  };
  document.body.appendChild(script);
};
