import { HomeIcon, DollarSignIcon, BriefcaseIcon, LeafIcon } from "lucide-react";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "Conscious Capital",
    to: "/conscious-capital",
    icon: <DollarSignIcon className="h-4 w-4" />,
  },
  {
    title: "Tech4Good Jobs",
    to: "/tech4good",
    icon: <BriefcaseIcon className="h-4 w-4" />,
  },
  {
    title: "Permaculture Farms",
    to: "/permaculture",
    icon: <LeafIcon className="h-4 w-4" />,
  },
];