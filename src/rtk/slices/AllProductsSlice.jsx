import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import product1 from '../../photos/Mens/green.png'
import product2 from '../../photos/Mens/T-shirt.png'
import product3 from '../../photos/Mens/babyblue.png'
import product4 from '../../photos/Mens/caarow.png'
import img10 from '../../photos/Women/img10.jpg'
import img11 from '../../photos/Women/img11.jpg'
import img12 from '../../photos/Women/img12.jpg'
import img13 from '../../photos/Women/img13.jpg'
import img14 from '../../photos/Women/img14.jpg'
import img15 from '../../photos/Women/img15.jpg'
import img16 from '../../photos/Women/Land1.jpg'
import img17 from '../../photos/Women/Land2.jpg'
import woman1 from '../../photos/Women/imag1jpeg.jpeg'
import woman2 from '../../photos/Women/img2.jpeg'
import woman3 from '../../photos/Women/img33.jpg'
import woman4 from '../../photos/Women/img44.jpg'
import woman5 from '../../photos/Women/img5.jpg'
import men1 from '../../photos/Mens/clem-onojeghuo-YhgXfs80RJo-unsplash.jpg'
import men2 from '../../photos/Mens/man-navy-jacket-jeans-streetwear.jpg'
import men3 from '../../photos/Mens/hassan-ouajbir-MkmcxwwCepY-unsplash.jpg'
import men4 from '../../photos/Mens/mark-west-yTbfXZN27Ow-unsplash.jpg'
import men5 from '../../photos/Mens/logan-weaver-lgnwvr-G5RSe8i_Id8-unsplash.jpg'
import men6 from '../../photos/Mens/red_Shirt.jpg'
import men7 from '../../photos/Mens/shirt1.jpg'
import men8 from '../../photos/Mens/T-shirt1.jpg'
import men9 from '../../photos/Mens/land1.jpg'
import men10 from '../../photos/Mens/land2.jpg'

const initialState = [
    {
        id: 20,
        category: "men's clothing",
        img: product1,
        price: 25,
        color: "Green",
        title: "Causal Shirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 5,
        aosDelay: 0,

    },
    {
        id: 21,
        category: "men's clothing",

        img: product2,
        price: 15,
        color: "White",
        title: " T-Shirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 4,
        aosDelay: 200,

    },
    {
        id: 23,
        category: "men's clothing",

        img: product3,
        price: 35,
        color: "Baby-BLue",
        title: "Causal Jacket",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 5,
        aosDelay: 400,

    },
    {
        id: 24,
        category: "men's clothing",
        img: product4,
        title: "Causal Jacket",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .", price: 35,
        color: "white",
        rating: 4,
        aosDelay: 600,
    },
    //      woman
    {
        id: 1,
        img: img17,
        color: "Dark Blue",
        category: "women's clothing",
        title: "Dark Blue Hody",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 4,
        price: 70,
        aosDelay: 600
        ,
    },
    {
        id: 2,
        img: img16,
        color: "Black",
        category: "women's clothing",
        title: "Black Shoes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 4,
        price: 70,
        aosDelay: 600
        ,
    },
    {
        id: 3,
        img: img15,
        color: "White",
        category: "women's clothing",
        title: "White T-Shirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 4,
        price: 70,
        aosDelay: 600
        ,
    }
    ,
    {
        id: 4,
        img: img13,
        color: "Blue",
        category: "women's clothing",
        title: "Blue Blouse",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 4,
        price: 29,
        aosDelay: 450
        ,
    },
    {
        id: 5,
        img: img14,
        color: "Pink",
        category: "women's clothing",
        title: "Pink Cardigan",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 4,
        price: 70,
        aosDelay: 600
        ,
    },
    {
        id: 6,
        img: img12,
        color: "Black",
        category: "women's clothing",
        title: "Black Jacket",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 5,
        price: 40,
        aosDelay: 300
        ,
    }
    ,
    {
        id: 7,
        img: img11,
        color: "Oliver",
        category: "women's clothing",
        title: " Causal pants",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 4,
        price: 20,
        aosDelay: 150
        ,
    }
    ,
    {
        id: 8,
        img: img10,
        color: "Beige",
        category: "women's clothing",
        title: " Women's coat",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 5,
        price: 30,
        aosDelay: 0
        ,
    }
    ,




    {
        id: 25,
        img: woman1,
        category: "women's clothing",
        size: 'L',
        color: "White",
        title: "Causal Skirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 5,
        price: 30,
        aosDelay: 0
        ,
    }, {
        id: 26,
        img: woman2,
        category: "women's clothing",
        size: 'XL',
        color: "Pink",
        title: " Causal Dress",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 4,
        price: 20,
        aosDelay: 150
        ,
    }, {
        id: 27,
        img: woman3,
        category: "women's clothing",
        size: 'XXL',

        color: "Purple",
        title: "Causal Dress",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 5,
        price: 40,
        aosDelay: 300
        ,
    },
    {
        id: 28,
        img: woman4,
        color: "Oliver",
        category: "women's clothing",
        size: 'M',
        title: "Causal Dress",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 4,
        price: 29,
        aosDelay: 450
        ,
    },
    {
        id: 29,
        category: "women's clothing",
        size: 'S',
        img: woman5,
        color: "Black",
        title: "Black Jacket",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 4,
        price: 70,
        aosDelay: 600
        ,
    },
    //      men
    {
        id: 30,
        img: men1,
        category: "men's clothing",
        size: 'M',

        title: "BLack Jacket",
        rating: 5,
        color: "Black",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        price: 50,
        aosDelay: 0
        ,
    }, {
        id: 31,
        category: "men's clothing",
        size: 'XL',

        img: men2,
        price: 30,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        title: "Jeans Jacket",
        rating: 5,
        color: "Dark Blue",
        aosDelay: 200
        ,
    }, {
        id: 32,
        category: "men's clothing",
        img: men3,
        price: 25,
        size: 'L',

        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        title: "Polo Shirt",
        rating: 4.5,
        color: "White",
        aosDelay: 400
        ,
    },
    {
        id: 33,
        category: "men's clothing",
        size: 'L',
        img: men4,
        price: 15,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        title: "Jeans Jacket",
        rating: 4,
        color: "Light Blue",
        aosDelay: 600
        ,
    },
    {
        id: 34,
        size: 'XXL',
        img: men5,
        category: "men's clothing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        title: " Classic Jacket",
        price: 65,
        rating: 4,
        color: "Black",
        aosDelay: 800
        ,
    },
    {
        id: 35,
        size: 'L',
        img: men6,
        category: "men's clothing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        title: "Red Shirt",
        price: 50,
        rating: 5,
        color: "Red",
        aosDelay: 820
        ,
    },
    {
        id: 36,
        img: men7,
        size: 'L',

        category: "men's clothing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        title: "Gray T-Shirt",
        price: 39,
        aosDelay: 830,
        rating: 5,
        color: "Gray",
    },
    {
        id: 37,
        size: 'XL',
        img: men8,
        category: "men's clothing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        title: "Gray T-Shirt",
        price: 29,
        aosDelay: 840,
        rating: 3,
        color: "Gray",
    },
    {
        id: 38,
        size: 'XL',
        img: men9,
        category: "men's clothing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        title: "Oliver Shirt",
        rating: 4,
        color: "Oliver",
        price: 35,
        aosDelay: 850,
    },
    {
        id: 39,
        size: 'M',
        img: men10,
        category: "men's clothing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        title: "White Shirt",
        rating: 5,
        color: "White",
        price: 69,
        aosDelay: 860
        ,
    },
];

export const fetchProducts = createAsyncThunk(
    "AllProductsSlice/fetchProducts",
    async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        return data;
    }
);

export const AllProductsSlice = createSlice({
    name: "AllProductsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            // Return a new state by concatenating the existing state with the fetched data
            return ([...state, ...action.payload]);
        });
    },
});


export default AllProductsSlice.reducer;