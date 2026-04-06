import { useNavigate } from "react-router";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

export function Cart() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, getTotal, clearCart } = useCart();

  const subtotal = getTotal();
  const deliveryFee = items.length > 0 ? 2.99 : 0;
  const total = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add some delicious food to get started
            </p>
            <Button onClick={() => navigate("/")}>Browse Restaurants</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Group items by restaurant
  const itemsByRestaurant = items.reduce((acc, item) => {
    const restaurant = item.restaurantName;
    if (!acc[restaurant]) {
      acc[restaurant] = [];
    }
    acc[restaurant].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Your Cart</h1>
            <Button variant="ghost" onClick={clearCart} className="gap-2">
              <Trash2 className="w-4 h-4" />
              Clear Cart
            </Button>
          </div>

          <div className="space-y-6">
            {Object.entries(itemsByRestaurant).map(([restaurant, restaurantItems]) => (
              <Card key={restaurant}>
                <CardHeader>
                  <CardTitle>{restaurant}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {restaurantItems.map((item) => (
                    <div key={item.menuItem.id}>
                      <div className="flex gap-4">
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.menuItem.name}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {item.menuItem.description}
                          </p>
                          <p className="text-lg font-semibold mt-1">
                            ${item.menuItem.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.menuItem.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          <div className="flex items-center gap-2 border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.menuItem.id, item.quantity - 1)
                              }
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.menuItem.id, item.quantity + 1)
                              }
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      {item !== restaurantItems[restaurantItems.length - 1] && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Button className="w-full" size="lg" onClick={() => navigate("/checkout")}>
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
