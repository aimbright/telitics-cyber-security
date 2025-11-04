import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Link as LinkIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cyber-blockchain.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 z-10" />
        
        <div className="container mx-auto px-4 lg:px-8 py-32 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Empowering the Digital Future with{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Secure Intelligence
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Telitics delivers next-generation Cyber Security and Blockchain
                solutions that help enterprises protect, analyze, and scale securely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-glow text-lg"
                >
                  <Link to="/platform">Explore Our Platform</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg"
                >
                  <Link to="/pricing">Get Started</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
              <img
                src={heroImage}
                alt="Cyber Security and Blockchain Technology"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-glow transition-all duration-500 border-2 hover:border-primary cursor-pointer">
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
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
                >
                  Read More <ArrowRight className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-500 border-2 hover:border-primary cursor-pointer">
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
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
                >
                  Read More <ArrowRight className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
