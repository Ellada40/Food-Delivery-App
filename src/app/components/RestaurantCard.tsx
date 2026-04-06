import { Star, Clock, DollarSign } from "lucide-react";
import { Restaurant } from "../data/mockData";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link } from "react-router";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg">{restaurant.name}</h3>
              <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
            </div>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              {restaurant.rating}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {restaurant.deliveryTime} min
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              ${restaurant.deliveryFee} delivery
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
