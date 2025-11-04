import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
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
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
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

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
              <img
                src={teamImage}
                alt="Telitics Team Collaboration"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container mx-auto px-4 lg:px-8">
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

      {/* Location */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
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
    </div>
  );
};

export default About;
