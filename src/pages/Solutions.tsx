import { Shield, Lock, Eye, FileCheck, Link as LinkIcon, Database, CheckCircle, Globe, Zap, Network, Key, Server, AlertTriangle, Fingerprint, Search, Activity, BarChart3, Users, Settings, Globe2, FileLock, CircuitBoard, Cpu, Cloud, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import cyberSecurityImage from "@/assets/cyber-security-visual.jpg";
import blockchainImage from "@/assets/blockchain-network.jpg";
import dataCenterImage from "@/assets/data-center.jpg";

const Solutions = () => {
  const { openDialog } = useContactDialog();
  const cyberFeatures = [
    { icon: Shield, text: "Advanced Threat Detection", desc: "AI-powered threat identification and response" },
    { icon: Lock, text: "Data Encryption & Privacy", desc: "End-to-end encryption for all data transmissions" },
    { icon: Eye, text: "Real-time Monitoring", desc: "24/7 security monitoring and alerting" },
    { icon: FileCheck, text: "Compliance & Risk Management", desc: "GDPR, HIPAA, SOC 2 compliance ready" },
    { icon: AlertTriangle, text: "Incident Response", desc: "Rapid response to security breaches" },
    { icon: Fingerprint, text: "Identity & Access Management", desc: "Multi-factor authentication and access control" },
  ];

  const blockchainFeatures = [
    { icon: LinkIcon, text: "Decentralized Architecture", desc: "Distributed network architecture" },
    { icon: Database, text: "Immutable Data Storage", desc: "Tamper-proof data records" },
    { icon: CheckCircle, text: "Smart Contract Development", desc: "Automated contract execution" },
    { icon: Globe, text: "Distributed Ledger Technology", desc: "Global ledger synchronization" },
    { icon: CircuitBoard, text: "Consensus Mechanisms", desc: "Proof of stake and work protocols" },
    { icon: Key, text: "Cryptographic Security", desc: "Advanced encryption standards" },
  ];

  const cyberServices = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities before attackers do.",
      icon: Search,
      features: ["Vulnerability scanning", "Network penetration", "Application security", "Social engineering tests"]
    },
    {
      title: "Security Operations Center (SOC)",
      description: "24/7 monitoring and incident response with expert security analysts.",
      icon: Eye,
      features: ["Threat detection", "Incident response", "Security monitoring", "Forensic analysis"]
    },
    {
      title: "Managed Security Services",
      description: "Complete security management including threat detection, response, and compliance.",
      icon: Settings,
      features: ["Firewall management", "Intrusion detection", "Security updates", "Compliance reporting"]
    },
    {
      title: "Cloud Security",
      description: "Secure your cloud infrastructure with enterprise-grade protection.",
      icon: Cloud,
      features: ["Cloud access security", "Data loss prevention", "Cloud compliance", "Multi-cloud security"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Our Expertise – Securing the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connected World
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions that protect your digital assets and enable trusted innovation
          </p>
        </div>
      </section>

      {/* Cyber Security Section */}
      <section id="cyber-security" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
                <span className="text-primary font-semibold">Cyber Security</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold">
                Complete Protection Ecosystem
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A complete ecosystem for protection — from risk mitigation and policy design
                to real-time threat detection and privacy assurance. Our comprehensive
                cyber security solutions safeguard your organization against evolving threats.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {cyberFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="group border-2 hover:border-primary hover:shadow-glow transition-all duration-300 cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg mb-1">{feature.text}</p>
                          <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-glow rounded-[50px] px-8 py-6 text-lg font-semibold"
                >
                  <Link to="/pricing">Get Cyber Security Solution</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
              <img
                src={cyberSecurityImage}
                alt="Cyber Security Protection"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Section */}
      <section id="blockchain" className="py-24 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl rounded-full" />
              <img
                src={blockchainImage}
                alt="Blockchain Network"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>

            <div className="space-y-8 animate-fade-in order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
                <span className="text-primary font-semibold">Blockchain</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold">
                Decentralized Trust Platform
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building decentralized trust for the new internet — ensuring secure,
                transparent, and immutable data systems. Transform your business operations
                with blockchain-powered innovation and transparency.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {blockchainFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="group border-2 hover:border-primary hover:shadow-glow transition-all duration-300 cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-lg mb-1">{feature.text}</p>
                          <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-glow rounded-[50px] px-8 py-6 text-lg font-semibold"
                >
                  <Link to="/pricing">Explore Blockchain Solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Security Services Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(${dataCenterImage})`
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6">
              <span className="text-primary font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cyber Security Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade security services designed to protect your digital infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cyberServices.map((service, index) => (
              <Card key={index} className="group border-2 hover:border-primary hover:shadow-glow transition-all duration-500 overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary to-accent/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Enterprises Trust Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven track record in protecting critical infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, value: "99.9%", label: "Uptime Guarantee" },
              { icon: Zap, value: "<50ms", label: "Response Time" },
              { icon: CheckCircle, value: "24/7", label: "Security Monitoring" },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-lg">{stat.label}</p>
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

export default Solutions;
