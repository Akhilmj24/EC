import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { styles } from "../../utils/style/style";
import Header from "../../components/header/Header";
import { Rating } from "primereact/rating";
import DisplaySectionProduct from "../../components/displayProduct/DisplaySectionProduct";
import RatingSection from "../../components/rating/RatingSection";
import { useParams } from "react-router-dom";
import { productItems } from "../../utils/data/Data";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../redux/features/cartSilce/cartSlice";
import { getProductbyid } from "../../redux/features/productSilce/productSlice";
import { baseUrlImage } from "../../utils/service/api";

export default function ProductView() {
  const [rating, setRating] = useState(null);
  const [imageData, setImageData] = useState([]);
  const [isSize, setisSize] = useState("");
  const product = useSelector((state) => state.product.product);
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductbyid(id));
  }, []);
  const addToCart = (product) => {
    const productItem = product;
    const akhil = "5"
    productItem.title = akhil;
    // dispatch(addtoCart(product));
    console.log(productItem);
    console.log("add");
  };
  useEffect(() => {
    if (product._id) {
      setImageData([
        {
          original: baseUrlImage + product?.images[0],
          thumbnail: baseUrlImage + product?.images[0],
        },
        {
          original: baseUrlImage + product?.images[1],
          thumbnail: baseUrlImage + product?.images[1],
        },
        {
          original: baseUrlImage + product?.images[2],
          thumbnail: baseUrlImage + product?.images[2],
        },
      ]);
      setRating(product?.ratings[0]);
    }
  }, [product]);
  return (
    <div className={`${styles.innerpagepaddings} `}>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[50%] md:h-[500px] overflow-hidden">
          <ImageGallery
            items={imageData}
            lazyLoad={true}
            showPlayButton={false}
            // autoPlay={true}
            // thumbnailPosition={"right"}
            slideDuration={700}
            className={`w-[100%] h-[100%] `}
          />
        </div>
        <div className="md:w-[50%] md:px-10">
          <h1 className="text-3xl mb-2 font-semibold">{product.title}</h1>
          <Rating
            value={rating}
            onChange={(e) => setRating(e.value)}
            cancel={false}
          />
          <div className="flex gap-3 my-4 items-end">
            <h3 className="text-2xl">Rs {product.saleprice}.00</h3>
            <p className="line-through decoration-2">
              Rs {product.orginalprice}.00
            </p>
          </div>
          {/* <div className="flex gap-3 items-end mb-2">
            <h6 className={`${styles.subHeading}`}>Seller name :</h6>
            <p>{product.sellername}</p>
          </div> */}
          {/* Size Section */}
          <div className="flex gap-3 my-3">
            <p
              onClick={() => setisSize("S")}
              className={`${
                isSize === `S`
                  ? `w-[25px] h-[25px] text-center bg-blueShade font-semibold rounded-[50%] cursor-pointer`
                  : `cursor-pointer`
              }`}
            >
              {product.countsmallsize > 0 ? `S` : null}
            </p>
            <p
              onClick={() => setisSize("M")}
              className={`${
                isSize === `M`
                  ? `w-[25px] h-[25px] text-center bg-blueShade font-semibold rounded-[50%] cursor-pointer`
                  : `cursor-pointer`
              }`}
            >
              {product.countmediumsize > 0 ? `M` : null}
            </p>
            <p
              onClick={() => setisSize("L")}
              className={`${
                isSize === `L`
                  ? `w-[25px] h-[25px] text-center bg-blueShade font-semibold rounded-[50%] cursor-pointer`
                  : `cursor-pointer`
              }`}
            >
              {product.countlargesize > 0 ? `L` : null}
            </p>
            <p
              onClick={() => setisSize("XL")}
              className={`${
                isSize === `XL`
                  ? `w-[25px] h-[25px] text-center bg-blueShade font-semibold rounded-[50%] cursor-pointer`
                  : `cursor-pointer`
              }`}
            >
              {product.countxtralargesize > 0 ? `XL` : null}
            </p>
          </div>
          {/* Size Section */}
          <div className="flex gap-3 my-4">
            <button onClick={() => dispatch(addtoCart(product))}>Add to cart</button>
            
            <button>Buy Now</button>
          </div>
          <h6 className={`${styles.subHeading}`}>Colors</h6>
          <div className="my-4">
            <div className="w-[30px] h-[30px] rounded-[50%] border-2 border-blueShade flex items-center justify-center">
              <div
                className="w-[20px] h-[20px] rounded-[50%]"
                // style={{ background: product.color.toLowerCase() }}
              ></div>
            </div>
          </div>
          <h6 className={`${styles.subHeading}`}>Description</h6>
          <p className="my-3">{product.description}</p>
        </div>
      </div>
      <div>
        <Header text={"Our Recommendations For You"} isMainHeading={false} />
        <div>
          <DisplaySectionProduct limit={4} />
        </div>
        <div className="mt-10">
          <RatingSection />
        </div>
      </div>
    </div>
  );
}
