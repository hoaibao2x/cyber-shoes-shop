import { AppDispatch } from "./../configStore";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_API } from "../../util/setting";

// Tạo interface ProductModel
export interface ProductModel {
  id: number;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
}

// state mặc định
const initialState: any = {
  arrProduct: [],
};

// Khai báo reducer
export const arrProduct = createSlice({
  name: "arrProduct",
  initialState,
  reducers: {
    getProdListAction: (state, action: PayloadAction<ProductModel[]>) => {
      state.arrProduct = action.payload;
    },
  },
});

export const { getProdListAction } = arrProduct.actions;

export default arrProduct.reducer;

// Action API
export const getProdAPI = () => {
  // AppDispatch: Kiểu dữ liệu của hàm dispatch (dispatch2 của thunk)
  return (dispatch: AppDispatch) => {
    axios({
      method: "get",
      url: `${URL_API}/Product`,
    })
      .then((result) => {
        let arrProduct: ProductModel[] = result.data.content;

        const action = getProdListAction(arrProduct);

        dispatch(action);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
