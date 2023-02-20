import React, { useEffect, useState } from "react";
import Textfield from "../../components/textField/Textfield";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { orderPayment } from "../../components/paymentgateway/Paymentgateway";
import { formatCurrency } from "../../utils/service/formatCurrency";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { addaddressForm } from "../../utils/data/formData/FormData";
import { getApi, postApi } from "../../utils/service/axiosCall";
import { apiProduct } from "../../utils/service/api";

export default function Subtotal({ isSize }) {
  const products = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user.user);
  const [issaveopen, setIssaveopen] = useState(false);
  const [address, setAddress] = useState([]);
  const [selectedaddress, setSelectedaddress] = useState(null);
  const [orderaddress, setOrderaddress] = useState();

  const totalAmount = products.reduce((accumulator, object) => {
    return accumulator + object.saleprice * object.quantity;
  }, 0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.userId = user._id;
    postApi(data, apiProduct.saveaddress)
      .then((res) => toast(res.message), setIssaveopen(false), reset())
      .catch((err) => console.log(err));
  };

  const checkoutHandler = () => {
    if (!isSize === "") {
      toast.error("Please select a product size");
    } else if (!orderaddress) {
      toast.error("Please select a address");
    } else {
      orderPayment(totalAmount, products, user, orderaddress);
    }
  };
  useEffect(() => {
    getApi(apiProduct.getaddress).then((res) => setAddress(res));
  }, [issaveopen]);
  useEffect(() => {
    getApi(`${apiProduct.getaddressbyid}${selectedaddress}`).then((res) =>
      setOrderaddress(res)
    );
  }, [selectedaddress]);

  return (
    <div className="md:border-0 md:p-0 py-5  border-y-2 border-gray-600 stickyConatiner">
      <div className="">
        <div className="flex justify-between items-end">
          <h1 className="text-2xl">Subtotal</h1>
          <p>{formatCurrency(totalAmount)}</p>
        </div>
        <p className="my-10">Tax included. Shipping calculated at checkout.</p>
        <div className="text-center">
          <button onClick={() => checkoutHandler()}>Checkout</button>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-2xl">Select Delivery Address</h1>

        {!address.length > 0 ? (
          <h1 className="my-2">Please add address</h1>
        ) : (
          address?.map(
            ({
              _id,
              housenumber,
              streetaddress,
              city,
              district,
              state,
              country,
              name,
              mobile,
              index,
            }) => (
              <div
                className="flex gap-3 items-start my-5 cursor-pointer"
                key={_id}
                onClick={() => setSelectedaddress(_id)}
              >
                <div className="cursor-pointer">
                  <input
                    type="radio"
                    name=""
                    id=""
                    checked={selectedaddress === _id}
                    className="cursor-pointer"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold tracking-wider">
                    {name}
                  </h2>
                  <p>
                    {housenumber}, {streetaddress}, {city}, {district}, {state},{" "}
                    {""}
                    {country}
                  </p>

                  <p>{mobile}</p>
                </div>
              </div>
            )
          )
        )}
        {/* <div className="flex gap-3 items-start my-5">
          <div className="cursor-pointer">
            <input type="radio" name="" id="" className="cursor-pointer" />
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-wider">Akhil</h2>
            <p>
              SVRA-29 Santhivila Near SBI ATM, Nemom P.O, TVM, Kerala - 695020
            </p>
            <p>Home</p>
            <p>7736570852</p>
          </div>
        </div> */}
        <div className="text-end">
          <p
            className="text-blue-600 cursor-pointer"
            onClick={() => setIssaveopen(true)}
          >
            Add New Address
          </p>
        </div>
        <div>
          <Dialog
            open={issaveopen}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setIssaveopen(false)}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Address to delivery product"}</DialogTitle>
            <div className="m-5">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                {addaddressForm.map((form, index) => (
                  <div key={index} className={`mb-2 w-full`}>
                    <Textfield
                      {...form}
                      register={register}
                      errors={errors}
                      isedit={false}
                    />
                    <small>{form.tagline}</small>
                  </div>
                ))}
                <div className="w-full flex gap-3">
                  <Button variant="contained" type="submit">
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
