import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}