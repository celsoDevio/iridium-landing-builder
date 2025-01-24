import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import TrainerSearch from "./pages/TrainerSearch";
import TrainerPromotion from "./pages/TrainerPromotion";
import InfluencerPromotion from "./pages/InfluencerPromotion";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Navbar />
          <div className="pt-16"> {/* Add padding to account for fixed navbar */}
            <Routes>
              <Route path="/" element={<Navigate to="/buscar-personal" replace />} />
              <Route path="/buscar-personal" element={<TrainerSearch />} />
              <Route path="/para-personal" element={<TrainerPromotion />} />
              <Route path="/para-influencer" element={<InfluencerPromotion />} />
            </Routes>
          </div>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;