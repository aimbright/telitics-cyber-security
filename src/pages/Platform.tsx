import { Card, CardContent } from "@/components/ui/card";
import { Activity, Database, FileCheck, UserCheck } from "lucide-react";
import platformImage from "@/assets/platform-dashboard.jpg";

const Platform = () => {
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

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary">
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

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 lg:px-8">
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
    </div>
  );
};

export default Platform;
