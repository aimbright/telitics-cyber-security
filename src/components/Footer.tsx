import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import teliticsLogo from "@/assets/telitics-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1724] text-white py-[60px] px-5">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={teliticsLogo} alt="Telitics Logo" className="h-12 w-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Telitics Technologies</h3>
            <p className="text-[#A0AEC0] text-sm leading-relaxed mb-5">
              Leading cyber security and blockchain solutions provider since 2009.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/telitics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:-translate-y-1 hover:scale-110 hover:shadow-[0_8px_20px_rgba(0,174,239,0.3)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/telitics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:-translate-y-1 hover:scale-110 hover:shadow-[0_8px_20px_rgba(0,174,239,0.3)]"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.facebook.com/telitics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:-translate-y-1 hover:scale-110 hover:shadow-[0_8px_20px_rgba(0,174,239,0.3)]"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.youtube.com/telitics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:-translate-y-1 hover:scale-110 hover:shadow-[0_8px_20px_rgba(0,174,239,0.3)]"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions#cyber-security" className="text-[#A0AEC0] text-sm hover:text-primary transition-colors duration-300 hover:underline">
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link to="/solutions#blockchain" className="text-[#A0AEC0] text-sm hover:text-primary transition-colors duration-300 hover:underline">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link to="/platform" className="text-[#A0AEC0] text-sm hover:text-primary transition-colors duration-300 hover:underline">
                  Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#A0AEC0] text-sm hover:text-primary transition-colors duration-300 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-[#A0AEC0] text-sm hover:text-primary transition-colors duration-300 hover:underline">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#A0AEC0] text-sm hover:text-primary transition-colors duration-300 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-[#A0AEC0] text-sm hover:text-primary transition-colors duration-300 hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-[#A0AEC0] text-sm hover:text-primary transition-colors duration-300 hover:underline">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=309+KTC+Building+Madhapur+Hyderabad+500081"
              target="_blank"
              rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#A0AEC0] text-sm hover:text-primary transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="hover:underline">#309, KTC Building, Madhapur</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+914023119433"
                  className="flex items-center gap-3 text-[#A0AEC0] text-sm hover:text-primary transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="hover:underline">+91 40-23119433</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info.tt@telitics.com"
                  className="flex items-center gap-3 text-[#A0AEC0] text-sm hover:text-primary transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="hover:underline">info.tt@telitics.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/914023119433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#A0AEC0] text-sm hover:text-primary transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <span className="hover:underline">+91 40-23119433</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-[#A0AEC0] text-sm">
            Copyright© {currentYear} Telitics. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="text-[#A0AEC0] hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-[#A0AEC0]">•</span>
            <a href="#" className="text-[#A0AEC0] hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <span className="text-[#A0AEC0]">•</span>
            <a
              href="https://aimbright.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A0AEC0] hover:text-primary transition-colors duration-300"
            >
              Built by Aimbright.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
