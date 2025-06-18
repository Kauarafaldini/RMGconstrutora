import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Index from "./pages/Index";
import ObraEmpresarial from "./pages/ObraEmpresarial";
import ObraCorporativa from "./pages/ObraCorporativa";
import ObraResidencial from "./pages/ObraResidencial";
import Facilities from "./pages/Facilities";
import SobreNos from "./pages/SobreNos";
import FaleConosco from "./pages/FaleConosco";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/obra-empresarial" element={<ObraEmpresarial />} />
          <Route path="/obra-corporativa" element={<ObraCorporativa />} />
          <Route path="/obra-residencial" element={<ObraResidencial />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
