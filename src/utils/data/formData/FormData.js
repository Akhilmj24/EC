export const productAddForm = [
  {
    label: "Product Name",
    slug: "title",
    required: true,
    pattern: { key: "" },
    size: "small",
    errortext: "Please enter product name",
    rowcount: 1,
    tagline: "Do not exceed 25 charaters",
    maxLength: 25,
    errormaxLength: "max character is 25",
    errorPattern: "",
    type: "text",
  },
  {
    label: "Product Code",
    slug: "productcode",
    required: true,
    pattern: { key: "" },
    size: "small",
    errortext: "Please enter product code",
    rowcount: 1,
    tagline: "Do not exceed 25 charaters",
    maxLength: 25,
    errormaxLength: "max character is 25",
    errorPattern: "No special characters allow",
    type: "text",
  },
  {
    label: "Product Orginal Price",
    slug: "orginalprice",
    required: true,
    pattern: { key: "" },
    size: "small",
    errortext: "Please enter product orginal price",
    rowcount: 1,
    tagline: "",
    maxLength: 10,
    errormaxLength: "max character is 10",
    errorPattern: "",
    type: "text",
  },
  {
    label: "Product Sale Price",
    slug: "saleprice",
    required: true,
    pattern: { key: "" },
    size: "small",
    errortext: "Please enter product sale price",
    rowcount: 1,
    tagline: "",
    maxLength: 10,
    errormaxLength: "max character is 10",
    errorPattern: "",
    type: "text",
  },
  {
    label: "Category",
    slug: "category",
    required: false,
    pattern: { key: "" },
    size: "small",
    errortext: "Select category",
    rowcount: 1,
    tagline: "",
    maxLength: 100,
    errormaxLength: "max character is 100",
    errorPattern: "",
    type: "dropdown",
    dropdownvalue: [
      { label: "Men", category: "men" },
      { label: "Women", category: "women" },
      { label: "Kids", category: "kids" },
    ],
  },
  {
    label: "Subcategory",
    slug: "subcategory",
    required: false,
    pattern: { key: "" },
    size: "small",
    errortext: "Select subcategory",
    rowcount: 1,
    tagline: "",
    maxLength: 100,
    errormaxLength: "max character is 100",
    errorPattern: "",
    type: "dropdown",
    dropdownvalue: [
      { label: "Shirt", category: "shirt" },
      { label: "T-Shirt", category: "T-shirt" },
      { label: "Pants", category: "pants" },
      { label: "Shorts", category: "shorts" },
      { label: "Saree", category: "saree" },
      { label: "Kurta", category: "kurta" },
    ],
  },
  {
    label: "Color",
    slug: "color",
    required: false,
    pattern: { key: "" },
    size: "small",
    errortext: "Select color",
    rowcount: 1,
    tagline: "",
    maxLength: 100,
    errormaxLength: "max character is 100",
    errorPattern: "",
    type: "dropdown",
    dropdownvalue: [
      { label: "None", color: "None" },
      { label: "Red", color: "red" },
      { label: "Blue", color: "Blue" },
      { label: "Green", color: "Green" },
    ],
  },
  {
    label: "Count Small size",
    slug: "countsmallsize",
    required: false,
    pattern: { key: /^[0-9]*$/i },
    size: "small",
    errortext: "Select color",
    rowcount: 1,
    tagline: "Enter the total count of small size item",
    maxLength: 100,
    errormaxLength: "max character is 100",
    errorPattern: "Only number allow",
    type: "text",
  },
  {
    label: "Count Medium size",
    slug: "countmediumsize",
    required: false,
    pattern: { key: /^[0-9]*$/i },
    size: "small",
    errortext: "Select color",
    rowcount: 1,
    tagline: "Enter the total count of medium size item",
    maxLength: 100,
    errormaxLength: "max character is 100",
    errorPattern: "Only number allow",
    type: "text",
  },
  {
    label: "Count Large size",
    slug: "countlargesize",
    required: false,
    pattern: { key: /^[0-9]*$/i },
    size: "small",
    errortext: "Select color",
    rowcount: 1,
    tagline: "Enter the total count of large size item",
    maxLength: 100,
    errormaxLength: "max character is 100",
    errorPattern: "Only number allow",
    type: "text",
  },
  {
    label: "Count XtraLarge size",
    slug: "countxtralargesize",
    required: false,
    pattern: { key: /^[0-9]*$/i },
    size: "small",
    errortext: "Select color",
    rowcount: 1,
    tagline: "Enter the total count of xtra large size item",
    maxLength: 100,
    errormaxLength: "max character is 100",
    errorPattern: "Only number allow",
    type: "text",
  },

  {
    label: "Product Description",
    slug: "description",
    required: true,
    pattern: { key: "" },
    size: "small",
    errortext: "Please enter product description",
    rowcount: 4,
    tagline:
      "Do not exceed 150 charaters when entering the product description",
    maxLength: 150,
    errormaxLength: "max character is 150",
    errorPattern: "",
    type: "text",
  },
];

export const addaddressForm = [
  {
    label: "Name",
    slug: "name",
    required: true,
    pattern: { key: "" },
    size: "small",
    errortext: "Please enter name",
    rowcount: 1,
    tagline: "",
    maxLength: 2005,
    errormaxLength: "max character is 2005",
    errorPattern: "",
    type: "text",
  },
  {
    label: "House Number",
    slug: "housenumber",
    required: true,
    pattern: { key: "" },
    size: "small",
    errortext: "Please enter house number",
    rowcount: 1,
    tagline: "",
    maxLength: 2005,
    errormaxLength: "max character is 2005",
    errorPattern: "",
    type: "text",
  },
  {
    label: "Street Address",
    slug: "streetaddress",
    required: true,
    pattern: { key: "" },
    size: "small",
    errortext: "Please enter street address",
    rowcount: 1,
    tagline: "",
    maxLength: 2005,
    errormaxLength: "max character is 2005",
    errorPattern: "",
    type: "text",
  },
  {
    label: "City",
    slug: "city",
    required: true,
    pattern: { key: "" },
    size: "small",
    errortext: "Please enter city",
    rowcount: 1,
    tagline: "",
    maxLength: 110,
    errormaxLength: "max character is 110",
    errorPattern: "",
    type: "text",
  },
  {
    label: "Pincode",
    slug: "pincode",
    required: true,
    pattern: { key: "" },
    size: "small",
    errortext: "Please enter pincode",
    rowcount: 1,
    tagline: "",
    maxLength: 10,
    errormaxLength: "max character is 10",
    errorPattern: "",
    type: "text",
  },
  {
    label: "Mobile",
    slug: "mobile",
    required: true,
    pattern: { key: "" },
    size: "small",
    errortext: "Please enter mobile",
    rowcount: 1,
    tagline: "",
    maxLength: 10,
    errormaxLength: "max character is 10",
    errorPattern: "",
    type: "text",
  },
  {
    label: "District",
    slug: "district",
    required: false,
    pattern: { key: "" },
    size: "small",
    errortext: "Select district",
    rowcount: 1,
    tagline: "",
    maxLength: 100,
    errormaxLength: "max character is 100",
    errorPattern: "",
    type: "dropdown",
    dropdownvalue: [
      { label: "TVM", category: "TVM" },
      { label: "EKM", category: "EKM" },
    ],
  },
  {
    label: "State",
    slug: "state",
    required: false,
    pattern: { key: "" },
    size: "small",
    errortext: "Select state",
    rowcount: 1,
    tagline: "",
    maxLength: 100,
    errormaxLength: "max character is 100",
    errorPattern: "",
    type: "dropdown",
    dropdownvalue: [{ label: "Kerala", category: "Kerala" }],
  },
  {
    label: "Country",
    slug: "country",
    required: false,
    pattern: { key: "" },
    size: "small",
    errortext: "Select country",
    rowcount: 1,
    tagline: "",
    maxLength: 100,
    errormaxLength: "max character is 100",
    errorPattern: "",
    type: "dropdown",
    dropdownvalue: [{ label: "India", country: "India" }],
  },
];
