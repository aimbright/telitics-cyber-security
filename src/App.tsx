import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ContactFormDialog from "./components/ContactFormDialog";
import { ContactDialogProvider, useContactDialog } from "./contexts/ContactDialogContext";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Platform from "./pages/Platform";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isOpen, closeDialog } = useContactDialog();

  return (
    <>
      <BrowserRouter basename="/telitics-cyber-security">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ContactFormDialog open={isOpen} onOpenChange={closeDialog} />
      </BrowserRouter>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ContactDialogProvider>
        <AppContent />
      </ContactDialogProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
