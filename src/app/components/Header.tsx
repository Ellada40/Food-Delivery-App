import { ShoppingCart, Package, Home } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useCart } from "../context/CartContext";

export function Header() {
  const location = useLocation();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl">🍔</span>
            </div>
            <span className="text-xl font-bold">FoodExpress</span>
          </Link>

          <nav className="flex items-center gap-2">
            <Button
              variant={location.pathname === "/" ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/" className="gap-2">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
            <Button
              variant={location.pathname === "/orders" ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/orders" className="gap-2">
                <Package className="w-4 h-4" />
                Orders
              </Link>
            </Button>
            <Button
              variant={location.pathname === "/cart" ? "default" : "ghost"}
              size="sm"
              className="relative"
              asChild
            >
              <Link to="/cart" className="gap-2">
                <ShoppingCart className="w-4 h-4" />
                Cart
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                    {itemCount}
                  </Badge>
                )}
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
