import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import SearchDirectory from "./pages/SearchDirectory";
import ApplyToCoCreate from "./pages/ApplyToCoCreate";
import Admin from "./pages/Admin";
import InspiringInnovations from "./pages/InspiringInnovations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/search-directory" element={<SearchDirectory />} />
            <Route path="/build" element={<ApplyToCoCreate />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/inspiring-innovations" element={<InspiringInnovations />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;