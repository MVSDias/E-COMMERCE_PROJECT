import {  createBrowserRouter, RouterProvider } from "react-router";
import { MainLayout } from "../layout/mainlayout";
import CompleteOrderPage from "../Pages/CompleteOrderPage";
import HomePage from "../Pages/homePage";
import SuccessPage from "../Pages/successPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {path:"/", element:<HomePage />},
      {path:"/carrinho", element:<CompleteOrderPage />},
      {path:"/sucesso", element:<SuccessPage />}
    ]
  }  
])

const AppRoutes = ()=> {
  return(<RouterProvider router={router} />)    
}

export default AppRoutes;