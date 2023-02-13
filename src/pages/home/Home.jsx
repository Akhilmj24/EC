import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import ProductgirdDisplay from "../../components/card/ProductgirdDisplay";
import Header from "../../components/header/Header";
import DisplaySectionProduct from "../../components/displayProduct/DisplaySectionProduct";
import { useNavigate } from "react-router-dom";
import { productItems } from "../../utils/data/Data";
import PhotosUploader from "../../components/uploader/PhotosUploader";

export default function Home() {
  const navigate = useNavigate();

  const [addedPhotos, setAddedPhotos] = useState([]);
  
  return (
    <div>
      <Banner />
      <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
      <Header text={"New Arrvials"} isMainHeading={true} />
      <DisplaySectionProduct limit={4} orderType={"newAdded"} />
      <ProductgirdDisplay />
      <Header text={"Top Product"} isMainHeading={true} />
      <DisplaySectionProduct limit={4} orderType={"topSale"} />
      <div className="grid place-content-center my-5">
        <button onClick={() => navigate("/productlist")}>Load More</button>
      </div>

      {/* Home
      {user.loading && <div>Loagfgding</div>}
      {!user.loading && user.error ? <div>{user.error}</div> : null}
      {!user.loading && user.user.length ? (
        <div>
          {user.user?.map((user) => (
            <div>
              <h1>{user.title}</h1>
            </div>
          ))}
        </div>
      ) : null} */}
    </div>
  );
}
