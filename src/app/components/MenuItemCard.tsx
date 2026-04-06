import { Plus } from "lucide-react";
import { MenuItem } from "../data/mockData";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: () => void;
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex">
        <div className="flex-1 p-4">
          <h4 className="font-semibold mb-1">{item.name}</h4>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">${item.price.toFixed(2)}</span>
            <Button size="sm" onClick={onAddToCart} className="gap-1">
              <Plus className="w-4 h-4" />
              Add
            </Button>
          </div>
        </div>
        <div className="w-24 h-24 m-4 flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </Card>
  );
}
