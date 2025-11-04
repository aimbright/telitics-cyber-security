import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, CheckCircle2, Send, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import betterExperienceImage from "@/assets/better_experience_agents.png";
import backgroundPatternImage from "@/assets/background-pattern.jpg";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send as JSON (matching Postman format)
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyoeowdZjcy1zQDnWHfpgBeBQ7UerA0OTPQ6Fl9Kgf_gYXD-j0cf93NQVTpb8ACwmmc/exec",
        {
          method: "POST",
          mode: "no-cors", // Required for Google Apps Script to avoid CORS issues
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", // Follow 302 redirects
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            message: formData.message,
          }),
        }
      );

      // With no-cors mode, we can't read the response, but the request was sent
      // Google Apps Script returns 302 redirect which is normal
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setShowSuccessDialog(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "How quickly can I get started with Telitics?",
      answer:
        "You can get started immediately! Our onboarding process typically takes 24-48 hours, and our team will guide you through every step.",
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer:
        "Yes! Our Enterprise plan includes fully customizable solutions tailored to your specific security and blockchain requirements.",
    },
    {
      question: "What support options are available?",
      answer:
        "We offer email support for Starter plans, priority 24/7 support for Professional plans, and dedicated account managers for Enterprise clients.",
    },
    {
      question: "Is my data secure on your platform?",
      answer:
        "Absolutely. We use military-grade encryption, multi-layer security protocols, and blockchain technology to ensure your data remains secure and tamper-proof.",
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
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            We're Here to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Help
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team for any questions or support needs
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help! Fill out the form below and our team will respond promptly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <Card className="border-2 hover:border-primary transition-all duration-300 shadow-xl hover:shadow-2xl">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">Send Us a Message</h3>
                    <p className="text-muted-foreground text-sm lg:text-base">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="John Doe"
                          required
                          className="border-2 h-12 focus:border-primary transition-colors"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="john@company.com"
                          required
                          className="border-2 h-12 focus:border-primary transition-colors"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mobile" className="block text-sm font-semibold mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                        placeholder="9876543210"
                        required
                        className="border-2 h-12 focus:border-primary transition-colors"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us how we can help..."
                        rows={6}
                        required
                        className="border-2 focus:border-primary transition-colors resize-none"
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow text-base font-semibold h-12"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Image Section - Inside Form Section */}
            <div className="order-1 lg:order-2 relative animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-4 lg:p-6 shadow-2xl">
                  <img
                    src={betterExperienceImage}
                    alt="Support Team"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="mt-6 lg:mt-8 space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-0.5">Fast Response</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-0.5">Expert Support</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Our team of security experts is here to help you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contact Information</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reach out to us through any of these channels
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    #309, KTC Building
                    <br />
                    Image Hospital Road
                    <br />
                    Gafoor Nagar, Madhapur
                    <br />
                    Hyderabad – 500081
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+914023119433"
                    className="text-sm text-primary hover:underline"
                  >
                    +91 40-23119433
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:info.tt@telitics.com"
                    className="text-sm text-primary hover:underline"
                  >
                    info.tt@telitics.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/914023119433"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    +91 40-23119433
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.02]"
          style={{
            backgroundImage: `url(${backgroundPatternImage})`
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 max-w-[1000px] relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border rounded-xl px-6 bg-background hover:border-primary transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-[50px] px-10 py-7 text-lg font-bold shadow-2xl hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10"
              >
                <Link to="/platform" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
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

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">Message Sent Successfully!</DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              Thank you for contacting us. We've received your message and our team will get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-glow"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Support;
