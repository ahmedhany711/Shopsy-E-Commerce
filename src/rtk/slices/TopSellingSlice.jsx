import { createSlice } from '@reduxjs/toolkit';
import img10 from '../../photos/Women/img10.jpg'
import img11 from '../../photos/Women/img11.jpg'
import img12 from '../../photos/Women/img12.jpg'
import img13 from '../../photos/Women/img13.jpg'
import img14 from '../../photos/Women/img14.jpg'
import img15 from '../../photos/Women/img15.jpg'
import img16 from '../../photos/Women/Land1.jpg'
import img17 from '../../photos/Women/Land2.jpg'



const initialState = [
    {
        id: 1,
        img: img17,
        color: "Dark Blue",
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
        title: " Women's coat",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit neque voluptatem nulla ipsum .",
        rating: 5,
        price: 30,
        aosDelay: 0
        ,
    }
    ,




];

export const TopSellingSlice = createSlice({
    name: "TopSellingSlice",
    initialState,
    reducers: {

    },

});

export const { } = TopSellingSlice.actions;
export default TopSellingSlice.reducer;