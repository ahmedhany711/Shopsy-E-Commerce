import { createSlice } from "@reduxjs/toolkit";
import img1 from '../../photos/Mens/clem-onojeghuo-YhgXfs80RJo-unsplash.jpg'
import img2 from '../../photos/Mens/man-navy-jacket-jeans-streetwear.jpg'
import img3 from '../../photos/Mens/hassan-ouajbir-MkmcxwwCepY-unsplash.jpg'
import img4 from '../../photos/Mens/mark-west-yTbfXZN27Ow-unsplash.jpg'
import img5 from '../../photos/Mens/logan-weaver-lgnwvr-G5RSe8i_Id8-unsplash.jpg'
import img6 from '../../photos/Mens/red_Shirt.jpg'
import img7 from '../../photos/Mens/shirt1.jpg'
import img8 from '../../photos/Mens/T-shirt1.jpg'
import img9 from '../../photos/Mens/land1.jpg'
import img10 from '../../photos/Mens/land2.jpg'





const initialState = [{
    id: 1,
    img: img1,
    title: "BLack Jacket",
    rating: 5,
    color: "Black",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    price: 50,
    aosDelay: 0
    ,
}, {
    id: 2,
    img: img2,
    price: 30,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    title: "Jeans Jacket",
    rating: 5,
    color: "Dark Blue",
    aosDelay: 200
    ,
}, {
    id: 3,
    img: img3,
    price: 25,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    title: "Polo Shirt",
    rating: 4.5,
    color: "White",
    aosDelay: 400
    ,
},
{
    id: 4,
    img: img4,
    price: 15,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    title: "Jeans Jacket",
    rating: 4,
    color: "Light Blue",
    aosDelay: 600
    ,
},
{
    id: 5,
    img: img5,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    title: " Classic Jacket",
    price: 65,
    rating: 4,
    color: "Black",
    aosDelay: 800
    ,
},
{
    id: 6,
    img: img6,
    title: "Red Shirt",
    rating: 5,
    color: "Red",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    price: 50,
    aosDelay: 0
    ,
},
{
    id: 7,
    img: img7,
    title: "Gray T-Shirt",
    rating: 5,
    color: "Gray",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    price: 39,
    aosDelay: 150
    ,
},
{
    id: 8,
    img: img8,
    title: "Gray T-Shirt",
    rating: 3,
    color: "Black",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    price: 29,
    aosDelay: 300
    ,
},
{
    id: 9,
    img: img9,
    title: "Oliver Shirt",
    rating: 4,
    color: "Oliver",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    price: 35,
    aosDelay: 450
    ,
},
{
    id: 10,
    img: img10,
    title: "White Shirt",
    rating: 5,
    color: "White",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
    price: 69,
    aosDelay: 600
    ,
},]

export const trendingProducts = createSlice({
    name: "trendingProducts",
    initialState,
    reducers: {},

});

export const { } = trendingProducts.actions;
export default trendingProducts.reducer;