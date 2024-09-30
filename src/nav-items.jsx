import { HomeIcon, DollarSignIcon, BriefcaseIcon, LeafIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import ConsciousCapitalDirectory from "./pages/ConsciousCapitalDirectory.jsx";
import Tech4GoodDirectory from "./pages/Tech4GoodDirectory.jsx";
import PermacultureDirectory from "./pages/PermacultureDirectory.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Conscious Capital",
    to: "/conscious-capital",
    icon: <DollarSignIcon className="h-4 w-4" />,
    page: <ConsciousCapitalDirectory />,
  },
  {
    title: "Tech4Good Jobs",
    to: "/tech4good",
    icon: <BriefcaseIcon className="h-4 w-4" />,
    page: <Tech4GoodDirectory />,
  },
  {
    title: "Permaculture Farms",
    to: "/permaculture",
    icon: <LeafIcon className="h-4 w-4" />,
    page: <PermacultureDirectory />,
  },
];