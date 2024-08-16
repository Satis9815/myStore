import { combineReducers } from "redux";
import ProductSlice from "./features/Product/ProductSlice"
const RootReducer = combineReducers({
    ProductSlice:ProductSlice
});

export default RootReducer;
