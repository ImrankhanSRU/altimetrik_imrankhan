import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

export const routes: any = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/home",
      element: <Products />
    }
]