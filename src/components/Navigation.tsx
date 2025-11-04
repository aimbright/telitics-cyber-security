import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import teliticsLogo from "@/assets/telitics-logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openDialog } = useContactDialog();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Platform", path: "/platform" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-40px)] max-w-[calc(1400px-40px)] mx-auto px-5 lg:px-5">
      <div className="bg-[rgba(15,23,36,0.85)] backdrop-blur-[10px] rounded-[24px] shadow-[0_4px_20px_rgba(15,23,36,0.3)] px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img
              src={teliticsLogo}
              alt="Telitics Logo"
              className="h-12 lg:h-14 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center gap-2 h-full">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-5 py-6 text-white text-[15px] font-medium transition-colors duration-200 h-full flex items-center group"
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[40%] h-[3px] bg-gradient-to-r from-primary to-accent rounded-[2px] transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Button 
              onClick={openDialog}
              className="bg-accent text-white hover:bg-accent/90 rounded-[50px] px-6 py-3 text-[15px] font-semibold shadow-[0_2px_8px_rgba(255,68,68,0.3)] hover:shadow-[0_4px_12px_rgba(255,68,68,0.4)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              Book a demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white text-2xl"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-4 text-sm font-medium transition-colors border-b border-white/10 ${
                    isActive ? 'text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="px-4 mt-4">
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openDialog();
                }}
                className="w-full bg-accent text-white hover:bg-accent/90 rounded-[50px] px-6 py-3 text-[15px] font-semibold shadow-[0_2px_8px_rgba(255,68,68,0.3)]"
              >
                Book a demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
