import { HomeIcon, PlusCircleIcon, ShieldIcon, LightbulbIcon, BeakerIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import ApplyToCoCreate from "./pages/ApplyToCoCreate.jsx";
import Admin from "./pages/Admin.jsx";
import InspiringInnovations from "./pages/InspiringInnovations.jsx";
import Prototype from "./pages/Prototype.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Apply to Co-Create",
    to: "/build",
    icon: <PlusCircleIcon className="h-4 w-4" />,
    page: <ApplyToCoCreate />,
  },
  {
    title: "Inspiring Innovations",
    to: "/inspiring-innovations",
    icon: <LightbulbIcon className="h-4 w-4" />,
    page: <InspiringInnovations />,
  },
  {
    title: "Prototype",
    to: "/prototype",
    icon: <BeakerIcon className="h-4 w-4" />,
    page: <Prototype />,
  },
];

export const adminNavItem = {
  title: "Admin",
  to: "/admin",
  icon: <ShieldIcon className="h-4 w-4" />,
  page: <Admin />,
};