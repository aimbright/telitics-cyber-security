import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Database, FileCheck, UserCheck, ArrowRight, CheckCircle2, Shield, Zap, Globe, BarChart3, Settings, Lock, Server, Network, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import platformImage from "@/assets/platform-dashboard.jpg";
import enterprisePlatformImage from "@/assets/enterprise-platform.jpg";
import backgroundPatternImage from "@/assets/background-pattern.jpg";

const Platform = () => {
  const { openDialog } = useContactDialog();
  const features = [
    {
      icon: Activity,
      title: "Threat Detection Dashboard",
      description: "Real-time monitoring and analysis of security threats with AI-powered insights and automated response mechanisms.",
    },
    {
      icon: Database,
      title: "Blockchain Data Vault",
      description: "Immutable and encrypted storage solution ensuring data integrity, transparency, and secure access control.",
    },
    {
      icon: FileCheck,
      title: "Compliance & Risk Analytics",
      description: "Comprehensive compliance monitoring and risk assessment tools to meet regulatory requirements effortlessly.",
    },
    {
      icon: UserCheck,
      title: "Identity Management Hub",
      description: "Centralized identity verification and access management with multi-factor authentication and behavioral analysis.",
    },
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Multi-layered security architecture with end-to-end encryption and zero-trust principles.",
    },
    {
      icon: Zap,
      title: "Real-Time Analytics",
      description: "AI-powered analytics engine that processes millions of events per second for instant insights.",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy across multiple regions with automatic failover and load balancing capabilities.",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Comprehensive dashboards and reports to track security metrics and business performance.",
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Seamlessly integrate with your existing tools and workflows via REST APIs and webhooks.",
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Enterprise-grade data protection with automated backups, encryption, and disaster recovery.",
    },
  ];

  const platformHighlights = [
    {
      title: "Unified Dashboard",
      description: "Single pane of glass for all your security and blockchain operations. Monitor threats, manage access, and track compliance from one intuitive interface.",
      icon: Activity,
    },
    {
      title: "AI-Powered Automation",
      description: "Leverage machine learning algorithms to automatically detect anomalies, respond to threats, and optimize your security posture in real-time.",
      icon: Cpu,
    },
    {
      title: "Blockchain Integration",
      description: "Built-in blockchain technology ensures data immutability, transparent audit trails, and decentralized trust for your critical operations.",
      icon: Network,
    },
    {
      title: "Enterprise-Ready",
      description: "Designed for large-scale deployments with high availability, scalability, and enterprise-grade security certifications.",
      icon: Server,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Unified Intelligence &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Security Platform
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A seamless cloud-based platform that integrates analytics, cyber threat
            monitoring, and blockchain-powered data integrity
          </p>
        </div>
      </section>

      {/* Platform Visualization */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
            <img
              src={platformImage}
              alt="Telitics Platform Dashboard"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Enterprise Platform Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: `url(${backgroundPatternImage})`
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
                <span className="text-primary font-semibold">Enterprise Platform</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold">
                Built for{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Enterprise Scale
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our unified platform combines cutting-edge cyber security capabilities with
                blockchain technology to deliver enterprise-grade solutions that scale with
                your business. Trusted by Fortune 500 companies worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience seamless integration, real-time threat detection, and comprehensive
                compliance management—all from a single, powerful platform designed for
                modern enterprises.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "99.9%", desc: "Uptime SLA" },
                  { label: "24/7", desc: "Support" },
                  { label: "500+", desc: "Integrations" },
                  { label: "SOC 2", desc: "Compliant" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.label}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
              <img
                src={enterprisePlatformImage}
                alt="Enterprise Platform"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive platform capabilities designed for modern enterprises
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-500 border-2 hover:border-primary hover:scale-105"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: `url(${backgroundPatternImage})`
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Platform{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools and features that drive your security and business operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-500 border-2 hover:border-primary hover:scale-105"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{capability.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what makes our platform the choice for leading enterprises
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {platformHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-500 border-2 hover:border-primary"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{highlight.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
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

export default Platform;
