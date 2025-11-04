import { Shield, Lock, Eye, FileCheck, Link as LinkIcon, Database, CheckCircle, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cyberSecurityImage from "@/assets/cyber-security-visual.jpg";
import blockchainImage from "@/assets/blockchain-network.jpg";

const Solutions = () => {
  const cyberFeatures = [
    { icon: Shield, text: "Advanced Threat Detection" },
    { icon: Lock, text: "Data Encryption & Privacy" },
    { icon: Eye, text: "Real-time Monitoring" },
    { icon: FileCheck, text: "Compliance & Risk Management" },
  ];

  const blockchainFeatures = [
    { icon: LinkIcon, text: "Decentralized Architecture" },
    { icon: Database, text: "Immutable Data Storage" },
    { icon: CheckCircle, text: "Smart Contract Development" },
    { icon: Globe, text: "Distributed Ledger Technology" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary">
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
                    className="border-2 hover:border-primary hover:shadow-soft transition-all duration-300"
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold">{feature.text}</p>
                    </CardContent>
                  </Card>
                ))}
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
                    className="border-2 hover:border-primary hover:shadow-soft transition-all duration-300"
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold">{feature.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
