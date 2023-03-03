import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

type Props = {};

function HomeTemplate({}: Props) {
  return <>
    <Header />
    <Outlet />
  </>
}

export default HomeTemplate;
