import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import InspiringInnovations from "./pages/InspiringInnovations";
import Prototype from "./pages/Prototype";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";

const queryClient = new QueryClient();

const ScrollToApply = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToApply) {
      const applicationSection = document.getElementById('apply-to-co-create');
      if (applicationSection) {
        applicationSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

const AppContent = () => {
  useGoogleAnalytics();

  return (
    <Layout>
      <ScrollToApply />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/inspiring-innovations" element={<InspiringInnovations />} />
        <Route path="/prototype" element={<Prototype />} />
      </Routes>
    </Layout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;