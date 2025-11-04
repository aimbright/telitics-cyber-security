import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
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
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyoeowdZjcy1zQDnWHfpgBeBQ7UerA0OTPQ6Fl9Kgf_gYXD-j0cf93NQVTpb8ACwmmc/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            message: formData.message,
          }),
        }
      );

      setFormData({ name: "", email: "", mobile: "", message: "" });
      setShowSuccessDialog(true);
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Get in Touch</DialogTitle>
            <DialogDescription className="text-base">
              Fill out the form below and we'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dialog-name" className="block text-sm font-semibold mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="dialog-name"
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
                <label htmlFor="dialog-email" className="block text-sm font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  id="dialog-email"
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
              <label htmlFor="dialog-mobile" className="block text-sm font-semibold mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <Input
                id="dialog-mobile"
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
              <label htmlFor="dialog-message" className="block text-sm font-semibold mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="dialog-message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell us how we can help..."
                rows={5}
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
        </DialogContent>
      </Dialog>

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
    </>
  );
};

export default ContactFormDialog;

