import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { styles } from "../../utils/style/style";
import Header from "../../components/header/Header";
import { Rating } from "primereact/rating";
import DisplaySectionProduct from "../../components/displayProduct/DisplaySectionProduct";
import RatingSection from "../../components/rating/RatingSection";
import { useParams } from "react-router-dom";
import { productItems } from "../../utils/data/Data";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../redux/features/cartSilce/cartSlice";

export default function ProductView() {
  const [productItem, setProductItem] = useState(null);
  const [rating, setRating] = useState(null);
  const [imageData, setImageData] = useState([]);

  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setProductItem(productItems.filter((item) => item._id === parseInt(id)));
  }, [id]);
  useEffect(() => {
    if (productItem) {
      setImageData([
        {
          original: productItem[0].image,
          thumbnail: productItem[0].image,
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ]);
      setRating(productItem[0].rating);
    }
  }, [productItem]);
  return (
    <div className={`${styles.innerpagepaddings} `}>
      {productItems
        ?.filter((item) => item._id === parseInt(id))
        ?.map((item) => (
          <>
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
                <h1 className="text-3xl mb-2 font-semibold">{item.name}</h1>
                <Rating
                  value={rating}
                  onChange={(e) => setRating(e.value)}
                  cancel={false}
                />
                <div className="flex gap-3 my-4 items-end">
                  <h3 className="text-2xl">Rs {item.saleprice}.00</h3>
                  <p className="line-through decoration-2">
                    Rs {item.orginalprice}.00
                  </p>
                </div>
                <div className="flex gap-3 items-end mb-2">
                  <h6 className={`${styles.subHeading}`}>Seller name :</h6>
                  <p>{item.sellername}</p>
                </div>

                <div className="flex gap-3 my-3">
                  {productItem
                    ? item.sizes.map((size) => (
                        <p
                          className={`${
                            productItem[0].sizes[0] === size
                              ? `w-[24px] h-[24px] text-center bg-blueShade font-semibold rounded-[50%]`
                              : null
                          } `}
                        >
                          {size}
                        </p>
                      ))
                    : null}
                </div>
                <div className="flex gap-3 my-4">
                  <button onClick={() => dispatch(addtoCart(item))}>
                    Add to cart
                  </button>
                  <button>Buy Now</button>
                </div>
                <h6 className={`${styles.subHeading}`}>Colors</h6>
                <div className="my-4">
                  <div className="w-[30px] h-[30px] rounded-[50%] border-2 border-blueShade flex items-center justify-center">
                    <div
                      className="w-[20px] h-[20px] rounded-[50%]"
                      style={{ background: item.color }}
                    ></div>
                  </div>
                </div>
                <h6 className={`${styles.subHeading}`}>Description</h6>
                <p className="my-3">{item.dec}</p>
              </div>
            </div>
            <div>
              <Header
                text={"Our Recommendations For You"}
                isMainHeading={false}
              />
              <div>
                <DisplaySectionProduct limit={4} />
              </div>
              <div className="mt-10">
                <RatingSection />
              </div>
            </div>
          </>
        ))}
    </div>
  );
}
