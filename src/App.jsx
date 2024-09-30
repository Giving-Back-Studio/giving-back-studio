import React, { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const ConsciousCapitalDirectory = lazy(() => import("./pages/ConsciousCapitalDirectory"));
const Tech4GoodDirectory = lazy(() => import("./pages/Tech4GoodDirectory"));
const PermacultureDirectory = lazy(() => import("./pages/PermacultureDirectory"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/conscious-capital" element={<ConsciousCapitalDirectory />} />
            <Route path="/tech4good" element={<Tech4GoodDirectory />} />
            <Route path="/permaculture" element={<PermacultureDirectory />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;