import { createSlice } from "@reduxjs/toolkit";
import img1 from "../../photos/Mens/green.png";
import img2 from "../../photos/Mens/T-shirt.png";
import img3 from "../../photos/Mens/babyblue.png";
import img4 from "../../photos/Mens/caarow.png";
import img5 from "../../photos/Mens/Black.png";
import img6 from "../../photos/Mens/White-Shirt.png";
import img7 from "../../photos/Women/purple.png";
import img8 from "../../photos/Mens/z.png";

const initialState = [
  {
    id: 100,
    color: "Black",
    price: 12,

    img: img5,
    title: "Black T-Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    rating: 5,
    aosDelay: 700,
  },
  {
    id: 101,
    img: img3,
    price: 35,
    color: "BabyBLue",
    title: "BabyBLue Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    rating: 5,
    aosDelay: 400,
  },
  {
    id: 102,
    img: img1,
    price: 25,
    color: "Green",
    title: "Green Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    rating: 5,
    aosDelay: 0,
  },
  {
    id: 103,
    img: img4,
    color: "White",

    title: "Causal Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    rating: 4,
    aosDelay: 600,
  },
  {
    id: 104,
    img: img2,
    price: 15,
    color: "Beige",
    title: " T-Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    rating: 4,
    aosDelay: 200,
  },

  {
    id: 105,
    img: img6,
    color: "White",
    price: 45,

    title: "White T-Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    rating: 4,
    aosDelay: 800,
  },
  {
    id: 106,
    img: img7,
    color: "Purple",
    price: 25,

    title: "Purple Blouse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    rating: 4,
    aosDelay: 830,
  },
  {
    id: 107,
    img: img8,
    title: "Beach Shirt",
    color: "White",
    price: 19,

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    rating: 4,
    aosDelay: 830,
  },
];

export const TopProductSlice = createSlice({
  name: "topProductSlice",
  initialState,
  reducers: {},
});


export default TopProductSlice.reducer;
