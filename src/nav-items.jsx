import { HomeIcon, FolderIcon, PlusCircleIcon, ShieldIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Directory from "./pages/Directory.jsx";
import ApplyToCoCreate from "./pages/ApplyToCoCreate.jsx";
import Admin from "./pages/Admin.jsx";

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
    title: "Apply to Co-Create",
    to: "/build",
    icon: <PlusCircleIcon className="h-4 w-4" />,
    page: <ApplyToCoCreate />,
  },
];

export const adminNavItem = {
  title: "Admin",
  to: "/admin",
  icon: <ShieldIcon className="h-4 w-4" />,
  page: <Admin />,
};