import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Star, Clock, DollarSign, MapPin } from "lucide-react";
import { restaurants } from "../data/mockData";
import { MenuItemCard } from "../components/MenuItemCard";
import { Button } from "../components/ui/button";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";
import { Badge } from "../components/ui/badge";

export function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    );
  }

  const categories = [...new Set(restaurant.menu.map((item) => item.category))];

  const handleAddToCart = (item: typeof restaurant.menu[0]) => {
    addToCart(item, restaurant.id, restaurant.name);
    toast.success(`Added ${item.name} to cart`);
  };

  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to restaurants
        </Button>
      </div>

      {/* Restaurant Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg mb-2">{restaurant.description}</p>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 items-center">
            <Badge variant="secondary" className="gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              {restaurant.rating}
            </Badge>
            <div className="flex items-center gap-1 text-sm">
              <Clock className="w-4 h-4" />
              {restaurant.deliveryTime} min
            </div>
            <div className="flex items-center gap-1 text-sm">
              <DollarSign className="w-4 h-4" />
              ${restaurant.deliveryFee} delivery fee
            </div>
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="w-4 h-4" />
              Min order: ${restaurant.minOrder}
            </div>
            <Badge>{restaurant.cuisine}</Badge>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>

        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="grid gap-4">
              {restaurant.menu
                .filter((item) => item.category === category)
                .map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onAddToCart={() => handleAddToCart(item)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
