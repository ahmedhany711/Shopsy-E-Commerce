import { configureStore } from "@reduxjs/toolkit";
import TopSellingSlice from "./slices/TopSellingSlice";
import TestimonialsSlice from "./slices/TestimonailsSlice";
import CartSLice from "./slices/CartSLice";
import TrendingproductsSLice from "./slices/TrendingproductsSLice";
import TopRatedProductSlice from "./slices/TopRatedProductSlice";
import AllProductsSlice from "./slices/AllProductsSlice";
import CategoriesSlice from "./slices/CategoriesSlice";
import DetailsSlice from "./slices/DetailsSlice";
import CheckSlice from "./slices/CheckSlice";
import SavedProductSlice from "./slices/SavedProductSlice";

export const store = configureStore({
  reducer: {
    cart: CartSLice,
    allProducts: AllProductsSlice,
    trendingProducts: TrendingproductsSLice,
    topSelling: TopSellingSlice,
    topProducts: TopRatedProductSlice,
    testimonials: TestimonialsSlice,
    categories: CategoriesSlice,
    DetailsSlice: DetailsSlice,
    checkoutSLice: CheckSlice,
    saved: SavedProductSlice,
  },
});
