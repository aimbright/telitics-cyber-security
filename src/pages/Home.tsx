import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Link as LinkIcon, ArrowRight, Zap, Users, TrendingUp, CheckCircle2, Award, Target, Lock, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import heroImage from "@/assets/hero-cyber-blockchain2.png";
import cyberSecurityImage from "@/assets/cyber-security-visual.jpg";
import blockchainImage from "@/assets/blockchain-network.jpg";

const Home = () => {
  const [showText, setShowText] = useState(false);
  const { openDialog } = useContactDialog();

  useEffect(() => {
    const handleScroll = () => {
      // Once text appears after scrolling, keep it visible (don't hide when scrolling back up)
      if (window.scrollY > 100) {
        setShowText(true);
      }
      // Don't hide text once it's shown - keep it visible
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary pt-32 pb-[100px]">
        {/* Background hero image - without blur */}
        <div 
          className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-full h-full z-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        />
        
        {/* Dark overlay to improve text visibility - only show when text is visible */}
        <div className={`absolute inset-0 bg-black/40 z-[1] transition-opacity duration-500 ${showText ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <div className="container mx-auto max-w-[1400px] px-10 lg:px-10 relative z-10">
          <div className={`flex flex-col items-center justify-center text-center max-w-4xl mx-auto transition-all duration-500 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-[-0.04em] mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                <span className="animated-gradient-text">
                  Empowering the Digital Future with{" "}
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Secure Intelligence
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-8 lg:mb-14 leading-[1.7] max-w-[800px] mx-auto font-normal tracking-[-0.01em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Telitics delivers next-generation Cyber Security and Blockchain
                solutions that help enterprises protect, analyze, and scale securely.
              </p>
              
              <div className="flex gap-5 flex-wrap justify-center animate-fade-in">
                <Button
                  onClick={openDialog}
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 rounded-[50px] px-8 py-6 text-lg font-semibold shadow-[0_2px_8px_rgba(255,68,68,0.3)] hover:shadow-[0_4px_12px_rgba(255,68,68,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book a demo
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-[50px] px-8 py-6 text-lg font-semibold transition-all duration-300"
                >
                  <Link to="/pricing">Learn more</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Core Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security and blockchain solutions designed for modern enterprises
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="group hover:shadow-glow transition-all duration-500 border-2 hover:border-primary cursor-pointer overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cyberSecurityImage}
                  alt="Cyber Security"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Cyber Security</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A complete ecosystem for protection — from risk mitigation and
                  policy design to real-time threat detection and privacy assurance.
                  Safeguard your digital infrastructure with enterprise-grade security.
                </p>
                <Link
                  to="/solutions#cyber-security"
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all text-lg"
                >
                  Read More <ArrowRight className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-500 border-2 hover:border-primary cursor-pointer overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blockchainImage}
                  alt="Blockchain"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <LinkIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Blockchain</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Building decentralized trust for the new internet — ensuring secure,
                  transparent, and immutable data systems. Transform your business with
                  blockchain-powered innovation.
                </p>
                <Link
                  to="/solutions#blockchain"
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all text-lg"
                >
                  Read More <ArrowRight className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary to-accent/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-muted-foreground text-lg">Enterprise Clients</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                99.9%
              </div>
              <p className="text-muted-foreground text-lg">Uptime Guarantee</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-muted-foreground text-lg">Support Available</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                15+
              </div>
              <p className="text-muted-foreground text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose Telitics?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade solutions that scale with your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Military-grade encryption and multi-layer security protocols protect your data."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Real-time threat detection and response with minimal latency."
              },
              {
                icon: Globe,
                title: "Global Scale",
                description: "Deploy across multiple regions with consistent performance."
              },
              {
                icon: Target,
                title: "Precision Analytics",
                description: "Advanced analytics and insights to optimize your security posture."
              },
              {
                icon: Award,
                title: "Industry Leader",
                description: "Trusted by Fortune 500 companies worldwide for over 15 years."
              },
              {
                icon: CheckCircle2,
                title: "Compliance Ready",
                description: "Meet GDPR, HIPAA, SOC 2, and other regulatory requirements."
              }
            ].map((benefit, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-2 hover:border-primary">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-accent/80 to-primary/80 animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
          <div className="text-center space-y-10 max-w-4xl mx-auto">
            {/* Main heading with gradient animation */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-2xl">
                Ready to Secure Your Digital Future?
              </span>
            </h2>
            
            {/* Subtext with better styling */}
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto font-light">
              Join hundreds of enterprises that trust Telitics for their cyber security
              and blockchain needs. Get started today with a free consultation.
            </p>
            
            {/* Enhanced buttons with better styling */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/95 rounded-[50px] px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-[0_10px_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/pricing" className="flex items-center gap-2">
                  Explore Our Platform
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                onClick={openDialog}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-[50px] px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>Enterprise Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
