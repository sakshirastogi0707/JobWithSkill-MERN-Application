import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../Context/Context";
export default function Private() {
  const { user } = useContext(Context);
  return user ? <Outlet /> : <Navigate to="/Login" />;
}
