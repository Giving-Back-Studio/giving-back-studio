import { HomeIcon, FolderIcon, PlusCircleIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Directory from "./pages/Directory.jsx";
import ApplyToCoCreate from "./pages/ApplyToCoCreate.jsx";

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