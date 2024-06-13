import { createSlice } from "@reduxjs/toolkit";
import mens from "../../photos/About/men.jpeg"
import women from "../../photos/About/womans.jpeg"
import elect from '../../photos/About/elect.jpeg';
import jew from '../../photos/About/jew.jpeg';



const initialState = [{

    name: "Electronics",
    id: 1,
    description: "Lorem",
    image: elect,
    link: '/electronics',

}, {

    name: "Jewelry",
    id: 2,
    description: "Lorem",
    image: jew,
    link: '/jewelery',

}, {

    name: "Men's clothing",
    id: 3,
    description: "Lorem",
    image: mens,
    link: '/MensClothing',

},
{
    name: "Women's clothing",
    id: 4,
    description: "Lorem",
    image: women,
    link: '/WomansClothing',

},
]

export const CategoriesSlice = createSlice({
    name: "CategoriesSlice",
    initialState,
    reducers: {
        addToCategory: (state, action) => {
            return [...state, action.payload]
        },
    },

});


export default CategoriesSlice.reducer;