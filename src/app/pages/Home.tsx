import { useState } from "react";
import { Search } from "lucide-react";
import { restaurants } from "../data/mockData";
import { RestaurantCard } from "../components/RestaurantCard";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("all");

  const cuisines = ["all", ...new Set(restaurants.map((r) => r.cuisine))];

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCuisine =
      cuisineFilter === "all" || restaurant.cuisine === cuisineFilter;

    return matchesSearch && matchesCuisine;
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Your favorite food, delivered fast
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Choose from hundreds of restaurants and get fresh food delivered to your door
          </p>

          {/* Search and Filter */}
          <div className="flex gap-4 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search restaurants or cuisine..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {cuisines.map((cuisine) => (
                  <SelectItem key={cuisine} value={cuisine}>
                    {cuisine === "all" ? "All Cuisines" : cuisine}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Restaurants Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">
          {cuisineFilter === "all" ? "All Restaurants" : `${cuisineFilter} Restaurants`}
        </h2>
        
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No restaurants found. Try a different search or filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
