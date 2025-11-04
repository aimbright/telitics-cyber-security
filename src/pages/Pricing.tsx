import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Rocket, Shield, Building2 } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      icon: Rocket,
      name: "Starter",
      description: "Basic protection for small teams",
      monthlyPrice: "$299",
      yearlyPrice: "$2,990",
      features: [
        "Up to 10 users",
        "Basic threat detection",
        "Email support",
        "Standard compliance tools",
        "Monthly security reports",
      ],
    },
    {
      icon: Shield,
      name: "Professional",
      description: "Advanced features and integrations",
      monthlyPrice: "$799",
      yearlyPrice: "$7,990",
      features: [
        "Up to 50 users",
        "Advanced threat detection & AI monitoring",
        "24/7 priority support",
        "Full compliance suite",
        "Real-time security dashboard",
        "Blockchain data vault (100GB)",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      icon: Building2,
      name: "Enterprise",
      description: "Complete cyber + blockchain suite",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      features: [
        "Unlimited users",
        "Enterprise-grade security",
        "Dedicated account manager",
        "Custom compliance frameworks",
        "Advanced analytics & reporting",
        "Unlimited blockchain storage",
        "White-label options",
        "On-premise deployment available",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Flexible Plans for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Business
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan to secure and scale your digital infrastructure
          </p>

          {/* Pricing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-secondary rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                !isYearly
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isYearly
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-accent text-white px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative group hover:shadow-glow transition-all duration-500 ${
                  plan.popular
                    ? "border-2 border-primary scale-105 shadow-glow"
                    : "border-2 hover:border-primary"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="py-4">
                    <div className="text-4xl font-bold">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </div>
                    {plan.monthlyPrice !== "Custom" && (
                      <p className="text-muted-foreground mt-2">
                        per {isYearly ? "year" : "month"}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-accent hover:shadow-glow"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    View Plan Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
