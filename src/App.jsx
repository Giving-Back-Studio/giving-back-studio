import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ConsciousCapitalDirectory from "./pages/ConsciousCapitalDirectory";
import Tech4GoodDirectory from "./pages/Tech4GoodDirectory";
import PermacultureDirectory from "./pages/PermacultureDirectory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/conscious-capital" element={<ConsciousCapitalDirectory />} />
          <Route path="/tech4good" element={<Tech4GoodDirectory />} />
          <Route path="/permaculture" element={<PermacultureDirectory />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;