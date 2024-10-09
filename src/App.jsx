import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Directory from "./pages/Directory";
import ApplyToCoCreate from "./pages/ApplyToCoCreate";
import Admin from "./pages/Admin";
import InspiringInnovations from "./pages/InspiringInnovations";
import NewLandingPage from "./pages/NewLandingPage";
import ChatWidget from "./components/ChatWidget";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";

const queryClient = new QueryClient();

const AppContent = () => {
  useGoogleAnalytics();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Directory />} />
        <Route path="/build" element={<ApplyToCoCreate />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/inspiring-innovations" element={<InspiringInnovations />} />
        <Route path="/landing-page" element={<NewLandingPage />} />
      </Routes>
      <ChatWidget />
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