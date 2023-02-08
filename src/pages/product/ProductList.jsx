import React from "react";
import DisplayListProduct from "../../components/displayProduct/DisplayListProduct";

import Filter from "../../components/filter/Filter";
import { styles } from "../../utils/style/style";

export default function ProductList() {
 
  return (
    <div className={`${styles.innerpagepaddings} flex`}>
      <div className="w-[28%] relative">
        <div className="fixed">
          <Filter />
        </div>
      </div>
      <div className="ml-10 w-full">
        <DisplayListProduct />
      </div>
    </div>
  );
}
