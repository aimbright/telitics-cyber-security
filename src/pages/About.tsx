import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, ArrowRight, CheckCircle2, Shield, Users, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import teamImage from "@/assets/team-collaboration.jpg";
import teliticsLogo from "@/assets/telitics-logo.png";
import backgroundPatternImage from "@/assets/background-pattern.jpg";

const About = () => {
  const { openDialog } = useContactDialog();
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To deliver cutting-edge cyber security and blockchain solutions that empower organizations to operate securely in the digital age.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be the global leader in secure digital transformation, creating a trusted ecosystem where innovation thrives without compromise.",
    },
    {
      icon: Award,
      title: "Core Values",
      description:
        "Integrity, Innovation, Excellence, and Trust. We believe in transparent partnerships and delivering measurable results that protect and enhance your business.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-secondary via-background to-secondary relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.02]"
          style={{
            backgroundImage: `url(${backgroundPatternImage})`
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <img
              src={teliticsLogo}
              alt="Telitics Logo"
              className="h-20 w-auto animate-fade-in"
            />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Who{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              We Are
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Redefining digital trust through innovation and excellence
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.02]"
          style={{
            backgroundImage: `url(${backgroundPatternImage})`
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Telitics is a technology-driven company dedicated to redefining digital
                trust. We combine deep expertise in cyber security and blockchain to
                empower organizations with secure, scalable, and intelligent solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by industry experts with decades of combined experience, we
                understand the evolving challenges businesses face in protecting their
                digital assets. Our platform brings together cutting-edge security
                technologies with blockchain innovation to create a comprehensive defense
                ecosystem.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We serve enterprises across finance, healthcare, technology, and
                government sectors, helping them navigate the complex landscape of cyber
                threats while embracing the transformative potential of blockchain
                technology.
              </p>
            </div>

            <div className="relative animate-scale-in flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
              <img
                src={teliticsLogo}
                alt="Telitics Logo"
                className="relative rounded-3xl shadow-2xl w-full max-w-2xl h-auto bg-white/10 p-12 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.02]"
          style={{
            backgroundImage: `url(${backgroundPatternImage})`
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-500 border-2 hover:border-primary"
              >
                <CardContent className="p-8 space-y-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.02]"
          style={{
            backgroundImage: `url(${backgroundPatternImage})`
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building trust and security for organizations worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, value: "15+", label: "Years Experience" },
              { icon: Users, value: "Enterprise", label: "Grade Solutions" },
              { icon: Globe, value: "Global", label: "Reach & Support" },
              { icon: Zap, value: "24/7", label: "Security Monitoring" },
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

      {/* Location */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.02]"
          style={{
            backgroundImage: `url(${backgroundPatternImage})`
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-[1400px] relative z-10">
          <h2 className="text-4xl font-bold mb-12">Our Location</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary shadow-glow">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg">
                  <span className="font-semibold text-primary">Address:</span>
                  <br />
                  #309, KTC Building, Image Hospital Road
                  <br />
                  Gafoor Nagar, Madhapur
                  <br />
                  Hyderabad – 500081, India
                </p>
              </CardContent>
            </Card>
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

export default About;
