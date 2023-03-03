import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import { store } from "./redux/configStore";
import HomeTemplate from "./templates/HomeTemplate";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// path = "*": Link không tồn tại thì điều hướng người dùng sang trang khác

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="detail" element={<Detail />}>
            <Route path=":id" element={<Detail />}></Route>
          </Route>

          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
