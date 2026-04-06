import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { RestaurantDetail } from "./pages/RestaurantDetail";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Orders } from "./pages/Orders";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "restaurant/:id", Component: RestaurantDetail },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "orders", Component: Orders },
    ],
  },
]);
