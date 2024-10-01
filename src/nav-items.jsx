import { HomeIcon, FolderIcon, DollarSignIcon, BriefcaseIcon, LeafIcon, HeartIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Directory from "./pages/Directory.jsx";
import Investors from "./pages/Investors.jsx";
import Jobs from "./pages/Jobs.jsx";
import Farms from "./pages/Farms.jsx";
import Sponsor from "./pages/Sponsor.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Directory",
    to: "/directory",
    icon: <FolderIcon className="h-4 w-4" />,
    page: <Directory />,
  },
  {
    title: "Investors",
    to: "/investors",
    icon: <DollarSignIcon className="h-4 w-4" />,
    page: <Investors />,
  },
  {
    title: "Jobs",
    to: "/jobs",
    icon: <BriefcaseIcon className="h-4 w-4" />,
    page: <Jobs />,
  },
  {
    title: "Farms",
    to: "/farms",
    icon: <LeafIcon className="h-4 w-4" />,
    page: <Farms />,
  },
  {
    title: "Sponsor",
    to: "/sponsor",
    icon: <HeartIcon className="h-4 w-4" />,
    page: <Sponsor />,
  },
];