import { Package, Clock, CheckCircle, Truck } from "lucide-react";
import { mockOrders } from "../data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

export function Orders() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "preparing":
        return <Clock className="w-4 h-4" />;
      case "on-the-way":
        return <Truck className="w-4 h-4" />;
      case "delivered":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing":
        return "bg-yellow-500";
      case "on-the-way":
        return "bg-blue-500";
      case "delivered":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (mockOrders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Package className="w-16 h-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">No orders yet</h2>
            <p className="text-muted-foreground">
              Your order history will appear here
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{order.restaurant}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Order #{order.id} • {formatDate(order.date)}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className={`gap-2 ${getStatusColor(order.status)} text-white`}
                >
                  {getStatusIcon(order.status)}
                  {order.status.replace("-", " ")}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>
                      {item.quantity}x {item.menuItem.name}
                    </span>
                    <span>${(item.menuItem.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>

              {/* Order Tracking */}
              {order.status !== "delivered" && (
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Order Progress</span>
                    <span className="text-sm text-muted-foreground">
                      {order.status === "preparing"
                        ? "Being prepared..."
                        : "On the way!"}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getStatusColor(order.status)} transition-all`}
                        style={{
                          width:
                            order.status === "preparing"
                              ? "33%"
                              : order.status === "on-the-way"
                              ? "66%"
                              : "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
