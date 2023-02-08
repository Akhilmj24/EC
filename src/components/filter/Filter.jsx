import React from "react";
import { filterCategory, filterPrice } from "../../utils/data/Data";
import { styles } from "../../utils/style/style";

export default function Filter() {
  return (
    <div
      className={`${styles.filterbox} h-[70vh] overflow-scroll px-8 overflow-x-hidden`}
    >
      <div className={`${styles.underLine}`}>
        <h6 className={`${styles.subHeading} my-5`}>Category</h6>
        {filterCategory.map(({ name, value, index }) => (
          <div className="flex gap-3 mb-1" key={index}>
            <input type="radio" name="category" value={value} />
            <label for="filterCategory" className="text-lg font-semibold">
              {name}
            </label>
          </div>
        ))}
      </div>
      <div className={`${styles.underLine} my-2`}>
        <h6 className={`${styles.subHeading} my-5`}>Price</h6>
        {filterPrice.map(({ name, value, index }) => (
          <div className="flex gap-3 mb-1" key={index}>
            <input type="checkbox" name="price" value={value} />
            <label for="filterPrice" className="text-lg font-semibold">
              {name}
            </label>
          </div>
        ))}
      </div>
      <div className={`${styles.underLine} my-2`}>
        <h6 className={`${styles.subHeading} my-5`}>Discount</h6>
        {filterPrice.map(({ name, value, index }) => (
          <div className="flex gap-3 mb-1" key={index}>
            <input type="checkbox" name="price" value={value} />
            <label for="filterPrice" className="text-lg font-semibold">
              {name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
