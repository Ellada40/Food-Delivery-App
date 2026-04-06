import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Toaster } from "./components/ui/sonner";

export function Root() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}
