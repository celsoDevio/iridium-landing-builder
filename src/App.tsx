import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TrainerSearch from "./pages/TrainerSearch";
import TrainerPromotion from "./pages/TrainerPromotion";
import InfluencerPromotion from "./pages/InfluencerPromotion";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/buscar-personal" element={<TrainerSearch />} />
            <Route path="/para-personal" element={<TrainerPromotion />} />
            <Route path="/para-influencer" element={<InfluencerPromotion />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;