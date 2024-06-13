import { createSlice } from "@reduxjs/toolkit";

// import imgg1 from '../../photos/profile2jpg.jpg'
import img1 from '../../photos/profileeeee1.jpg'
import img2 from '../../photos/profileeeeee2.jpeg'
import img3 from '../../photos/Profile3.jpg'
import img4 from '../../photos/profile444.jpg'



const initialState = [{
    id: 1,
    img: img1,
    name: "Mohamed Ahmed",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis laudantium necessitatibus sequi provident unde rem alias perspiciatis.Itaque consequuntur illo temporibus.",

},
{
    id: 2,
    img: img2,
    name: "Ahmed  Ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis laudantium necessitatibus sequi provident unde rem alias perspiciatis.Itaque consequuntur illo temporibus.",


},
{
    id: 3,
    img: img3,
    name: "Nada Sherif",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis laudantium necessitatibus sequi provident unde rem alias perspiciatis.Itaque consequuntur illo temporibus.",


},
{
    id: 4,
    img: img4,
    name: "Ammar Yasser",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis laudantium necessitatibus sequi provident unde rem alias perspiciatis.Itaque consequuntur illo temporibus.",


},
{
    id: 5,
    name: " Basmla Ahmed",
    img: img3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis laudantium necessitatibus sequi provident unde rem alias perspiciatis.Itaque consequuntur illo temporibus.",

},]

export const TestimonialsSlice = createSlice({
    name: "TestimonialsSlice",
    initialState,
    reducers: {},

});

export const { } = TestimonialsSlice.actions;
export default TestimonialsSlice.reducer;