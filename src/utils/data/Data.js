export const filterCategory = [
  {
    name: "Clothing & Apparel",
    value: "clothingapparel",
  },
  {
    name: "Footwear & Shoes",
    value: "footwearshoes",
  },
  {
    name: "Electronics & Gadgets",
    value: "electronicsgadgets",
  },
  {
    name: "Games & Toys",
    value: "gamestoys",
  },
  {
    name: "Stationery",
    value: "stationery",
  },
  {
    name: "Furniture",
    value: "furniture",
  },
  {
    name: "Hand & Power Tools",
    value: "handpowertools",
  },
  {
    name: "Veterinary & Pet Items",
    value: "veterinarypetitems",
  },
];
export const filterPrice = [
  {
    name: "Rs 100 and Below",
    value: "-100",
  },

  {
    name: "Rs 101 to Rs 1000",
    value: "101-1000",
  },

  {
    name: "Rs 1001 to Rs 2000",
    value: "1001-2000",
  },
  {
    name: "Rs 2001 to Rs 3000",
    value: "2001-3000",
  },
  {
    name: "Rs 3001 to Rs 4000",
    value: "5001-4000",
  },
  {
    name: "Rs 4000 to Above",
    value: "+4000",
  },
];
export const filterDiscount = [
  {
    name: "10% and above",
    value: "10",
  },
  {
    name: "20% and above",
    value: "20",
  },
  {
    name: "30% and above",
    value: "30",
  },
  {
    name: "40% and above",
    value: "40",
  },
  {
    name: "50% and above",
    value: "50",
  },
  {
    name: "60% and above",
    value: "60",
  },
  {
    name: "70% and above",
    value: "70",
  },
];

export const productSize = [
  {
    label: "Small",
    value: "S",
  },
  {
    label: "Medium",
    value: "M",
  },
  {
    label: "Large",
    value: "L",
  },
  {
    label: "XtraLarge",
    value: "XL",
  },
];
export const productItems = [
  {
    _id: 1,
    name: "Ladies top and pants",
    image:
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsJTIwZ2lyc2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Clothing & Apparel",
    subcategory: "Women",
    categoryItem: ["Top", "Pants"],
    saleprice: "2853",
    orginalprice: "4025",
    dec: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "white",
    saleCount: "10",
    rating: 2,
    sellername: "Akhil",
    sizes: ["S", "M", "Xl"],
    quantity: 1,
  },
  {
    _id: 2,
    name: "Mens Shirts",
    image:
      "https://images.unsplash.com/photo-1617724757497-79b54c5444d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1vZGVsJTIwZ2lyc2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Clothing & Apparel",
    subcategory: "Men",
    categoryItem: ["Shirt"],
    saleprice: "5853",
    orginalprice: "1025",
    dec: "",
    color: "white",
    saleCount: "10",
    rating: 3,
    sellername: "Akhil",
    sizes: ["S", "M", "Xl"],
    quantity: 1,
  },
  {
    _id: 3,
    name: "Mens Watch",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Clothing & Apparel",
    subcategory: "Men",
    categoryItem: ["Watch"],
    saleprice: "10853",
    orginalprice: "5085",
    dec: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "brown",
    saleCount: "5",
    rating: 2,
    sellername: "Akhil",
    sizes: ["S", "M", "Xl"],
    quantity: 1,
  },
  {
    _id: 4,
    name: "Unisex shoes",
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Clothing & Apparel",
    subcategory: "Unisex",
    categoryItem: ["Shoes"],
    saleprice: "10853",
    orginalprice: "5085",
    dec: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "white",
    saleCount: "2",
    rating: 1,
    sellername: "Akhil",
    sizes: ["S", "M", "Xl"],
    quantity: 1,
  },
  {
    _id: 5,
    name: "Iphone",
    image:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Electronics & Gadgets",
    subcategory: "Phone",
    categoryItem: [""],
    specifications: {
      display: "6.1 inches, 90.2 cm",
      platform: "iOS 15, upgradable to iOS 16.3",
      memory: "No",
      mainCamera:
        "12 MP, f/1.5, 26mm (wide), 1/1.7, 1.9µm, dual pixel PDAF, sensor-shift OIS 12 MP, f/2.8, 77mm (telephoto), PDAF, 1/3.5, OIS, 3x optical zoom 12 MP, f/1.8, 13mm, 120˚ (ultrawide), 1/3.5, PDAF TOF 3D LiDAR scanner (depth)",
      Display: "dsfdsf",
    },
    variant: [
      {
        type: "128GB 6GB RAM",
        price: "107979.65",
      },
      {
        type: "256GB 6GB RAM 6GB RAM",
        price: "109979.65",
      },
    ],
    saleprice: "10853",
    orginalprice: "5085",
    dec: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "brown",
    saleCount: "1",
    rating: 4,
    sellername: "Akhil",
    sizes: ["S", "M", "Xl"],
    quantity: 1,
  },
  {
    _id: 6,
    name: "Baby girl top",
    image:
      "https://images.unsplash.com/photo-1611003967145-fb3960072424?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2lkcyUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Clothing & Apparel",
    subcategory: "Kid",
    categoryItem: ["Top"],
    saleprice: "2853",
    orginalprice: "4025",
    dec: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "white",
    saleCount: "15",
    rating: 2,
    sellername: "Akhil",
    sizes: ["S", "M", "Xl"],
    quantity: 1,
  },
];
