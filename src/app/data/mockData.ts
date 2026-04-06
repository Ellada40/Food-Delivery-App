export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  image: string;
  description: string;
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Pizza Paradise",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "25-35",
    deliveryFee: 2.99,
    minOrder: 15,
    image: "https://images.unsplash.com/photo-1727198826083-6693684e4fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnQlMjBmb29kfGVufDF8fHx8MTc3NTM0MjI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Authentic Italian pizza made with fresh ingredients",
    menu: [
      {
        id: "1-1",
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomato sauce, basil",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1727198826083-6693684e4fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnQlMjBmb29kfGVufDF8fHx8MTc3NTM0MjI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Pizza"
      },
      {
        id: "1-2",
        name: "Pepperoni Pizza",
        description: "Pepperoni, mozzarella, tomato sauce",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1727198826083-6693684e4fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnQlMjBmb29kfGVufDF8fHx8MTc3NTM0MjI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Pizza"
      },
      {
        id: "1-3",
        name: "Pasta Carbonara",
        description: "Creamy sauce, bacon, parmesan",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1609166639722-47053ca112ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW4lMjBmb29kfGVufDF8fHx8MTc3NTM1ODQxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Pasta"
      },
      {
        id: "1-4",
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee and mascarpone",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1679942262057-d5732f732841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZSUyMGZvb2R8ZW58MXx8fHwxNzc1MzgzMzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Dessert"
      }
    ]
  },
  {
    id: "2",
    name: "Sushi Station",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "30-40",
    deliveryFee: 3.99,
    minOrder: 20,
    image: "https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NzU0MzA2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Fresh sushi and Japanese delicacies",
    menu: [
      {
        id: "2-1",
        name: "California Roll",
        description: "Crab, avocado, cucumber",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NzU0MzA2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Sushi"
      },
      {
        id: "2-2",
        name: "Salmon Nigiri",
        description: "Fresh salmon over rice",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NzU0MzA2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Sushi"
      },
      {
        id: "2-3",
        name: "Spicy Tuna Roll",
        description: "Tuna, spicy mayo, cucumber",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NzU0MzA2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Sushi"
      }
    ]
  },
  {
    id: "3",
    name: "Burger House",
    cuisine: "American",
    rating: 4.3,
    deliveryTime: "20-30",
    deliveryFee: 1.99,
    minOrder: 10,
    image: "https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZHxlbnwxfHx8fDE3NzU0MDIzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Gourmet burgers and classic American fare",
    menu: [
      {
        id: "3-1",
        name: "Classic Cheeseburger",
        description: "Beef patty, cheese, lettuce, tomato, special sauce",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZHxlbnwxfHx8fDE3NzU0MDIzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Burgers"
      },
      {
        id: "3-2",
        name: "BBQ Bacon Burger",
        description: "Beef patty, bacon, BBQ sauce, onion rings",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZHxlbnwxfHx8fDE3NzU0MDIzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Burgers"
      }
    ]
  },
  {
    id: "4",
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.6,
    deliveryTime: "25-35",
    deliveryFee: 2.49,
    minOrder: 12,
    image: "https://images.unsplash.com/photo-1707604341704-74abdc25e52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMG1leGljYW4lMjBmb29kfGVufDF8fHx8MTc3NTM4MjE3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Authentic Mexican street food and tacos",
    menu: [
      {
        id: "4-1",
        name: "Beef Tacos",
        description: "Seasoned beef, lettuce, cheese, salsa",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1707604341704-74abdc25e52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMG1leGljYW4lMjBmb29kfGVufDF8fHx8MTc3NTM4MjE3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Tacos"
      },
      {
        id: "4-2",
        name: "Fish Tacos",
        description: "Grilled fish, cabbage slaw, chipotle mayo",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1707604341704-74abdc25e52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMG1leGljYW4lMjBmb29kfGVufDF8fHx8MTc3NTM4MjE3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Tacos"
      }
    ]
  },
  {
    id: "5",
    name: "Green Bowl",
    cuisine: "Healthy",
    rating: 4.7,
    deliveryTime: "20-30",
    deliveryFee: 2.99,
    minOrder: 15,
    image: "https://images.unsplash.com/photo-1692780941266-96892bb6c9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGhlYWx0aHklMjBmb29kfGVufDF8fHx8MTc3NTM3NjcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Fresh salads and healthy bowls",
    menu: [
      {
        id: "5-1",
        name: "Caesar Salad",
        description: "Romaine lettuce, parmesan, croutons, Caesar dressing",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1692780941266-96892bb6c9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGhlYWx0aHklMjBmb29kfGVufDF8fHx8MTc3NTM3NjcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Salads"
      },
      {
        id: "5-2",
        name: "Quinoa Power Bowl",
        description: "Quinoa, roasted vegetables, chickpeas, tahini",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1692780941266-96892bb6c9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGhlYWx0aHklMjBmb29kfGVufDF8fHx8MTc3NTM3NjcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Bowls"
      }
    ]
  },
  {
    id: "6",
    name: "Thai Spice",
    cuisine: "Thai",
    rating: 4.4,
    deliveryTime: "30-40",
    deliveryFee: 3.49,
    minOrder: 18,
    image: "https://images.unsplash.com/photo-1720949579179-b4d04403f548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpJTIwY3VycnklMjBmb29kfGVufDF8fHx8MTc3NTQ2MDQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Authentic Thai cuisine with bold flavors",
    menu: [
      {
        id: "6-1",
        name: "Pad Thai",
        description: "Stir-fried rice noodles, shrimp, peanuts, lime",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1720949579179-b4d04403f548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpJTIwY3VycnklMjBmb29kfGVufDF8fHx8MTc3NTQ2MDQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Noodles"
      },
      {
        id: "6-2",
        name: "Green Curry",
        description: "Thai green curry with chicken and vegetables",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1720949579179-b4d04403f548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpJTIwY3VycnklMjBmb29kfGVufDF8fHx8MTc3NTQ2MDQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Curry"
      }
    ]
  }
];

export interface Order {
  id: string;
  restaurant: string;
  items: {
    menuItem: MenuItem;
    quantity: number;
  }[];
  status: "preparing" | "on-the-way" | "delivered";
  total: number;
  date: string;
}

export const mockOrders: Order[] = [
  {
    id: "ORD-001",
    restaurant: "Pizza Paradise",
    items: [
      {
        menuItem: restaurants[0].menu[0],
        quantity: 2
      }
    ],
    status: "on-the-way",
    total: 28.97,
    date: "2026-04-06T18:30:00"
  },
  {
    id: "ORD-002",
    restaurant: "Sushi Station",
    items: [
      {
        menuItem: restaurants[1].menu[0],
        quantity: 1
      },
      {
        menuItem: restaurants[1].menu[1],
        quantity: 1
      }
    ],
    status: "delivered",
    total: 27.97,
    date: "2026-04-05T12:15:00"
  }
];
