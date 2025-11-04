import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Rocket, Shield, Building2, ArrowRight, CheckCircle2, Zap, TrendingDown, Star, Clock, Activity, FileCheck, Lock, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import backgroundPatternImage from "@/assets/background-pattern.jpg";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { openDialog } = useContactDialog();

  const plans = [
    {
      icon: Rocket,
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: "$299",
      yearlyPrice: "$2,841", // 5% off
      originalYearlyPrice: "$2,988",
      features: [
        "Up to 10 users",
        "Basic threat detection",
        "Email support",
        "Standard compliance tools",
        "Monthly security reports",
        "Basic analytics dashboard",
        "SSL/TLS encryption",
      ],
    },
    {
      icon: Shield,
      name: "Professional",
      description: "Best for growing businesses",
      monthlyPrice: "$799",
      yearlyPrice: "$7,591", // 5% off
      originalYearlyPrice: "$7,988",
      features: [
        "Up to 50 users",
        "Advanced threat detection & AI monitoring",
        "24/7 priority support",
        "Full compliance suite",
        "Real-time security dashboard",
        "Blockchain data vault (100GB)",
        "Custom integrations",
        "Advanced analytics & reporting",
        "Dedicated security advisor",
      ],
      popular: true,
    },
    {
      icon: Building2,
      name: "Enterprise",
      description: "Complete solution for large organizations",
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
        "Custom SLA & contracts",
        "Priority feature requests",
      ],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Setup",
      description: "Get started in minutes with our intuitive onboarding process",
    },
    {
      icon: Lock,
      title: "Secure by Default",
      description: "Enterprise-grade security built into every feature",
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 support team available across all time zones",
    },
    {
      icon: TrendingDown,
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprise charges",
    },
  ];

  const faqItems = [
    {
      question: "Can I switch plans later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and enterprise invoicing options.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! Start with a 14-day free trial. No credit card required. Cancel anytime.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-secondary via-background to-secondary relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: `url(${backgroundPatternImage})`
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Flexible Plans for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Business
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan to secure and scale your digital infrastructure
          </p>

          {/* Pricing Toggle with discount badge */}
          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-4 p-1 bg-secondary rounded-full relative">
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
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 relative ${
                  isYearly
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
              </button>
            </div>
            {isYearly && (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-primary text-white px-6 py-3 rounded-full shadow-lg animate-fade-in">
                <Star className="w-5 h-5" />
                <span className="font-bold">Save 5% - Limited Time Offer!</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-3"
          style={{
            backgroundImage: `url(${backgroundPatternImage})`
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All plans include our core security features. Upgrade or downgrade anytime.
            </p>
          </div>
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
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-1 rounded-full text-sm font-semibold z-10">
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

                  <div className="py-4 border-t border-b border-border">
                    {plan.monthlyPrice !== "Custom" ? (
                      <>
                        <div className="flex items-baseline gap-2">
                          <div className="text-4xl font-bold">
                            {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                          </div>
                          {isYearly && plan.originalYearlyPrice && (
                            <span className="text-lg text-muted-foreground line-through">
                              {plan.originalYearlyPrice}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground mt-2">
                          per {isYearly ? "year" : "month"}
                        </p>
                        {isYearly && (
                          <div className="mt-3 inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                            <TrendingDown className="w-4 h-4" />
                            Save 5%
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-4xl font-bold">Custom</div>
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
                    onClick={openDialog}
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-accent hover:shadow-glow"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.monthlyPrice === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose Telitics?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-2 hover:border-primary text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-3"
          style={{
            backgroundImage: `url(${backgroundPatternImage})`
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 max-w-[1000px] relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our pricing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the companies that trust Telitics for their security needs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: "24/7", label: "Security Monitoring" },
              { icon: Shield, value: "99.9%", label: "Uptime SLA" },
              { icon: Zap, value: "<50ms", label: "Response Time" },
              { icon: FileCheck, value: "SOC 2", label: "Compliance Ready" },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
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
                onClick={openDialog}
                size="lg"
                className="bg-white text-primary hover:bg-white/95 rounded-[50px] px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-[0_10px_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 transform hover:scale-105"
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

export default Pricing;
