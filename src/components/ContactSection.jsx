import { cn } from "../lib/utils"
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaYoutube } from "react-icons/fa6";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";



export const ContactSection = () => {
   
      const [isSending, setIsSending] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (isSending) return;

  const form = e.currentTarget;
  setIsSending(true);

  try {
    await emailjs.sendForm(
     import.meta.env.VITE_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    toast.success("Message sent! Thanks for reaching out.");
    form.reset();
    } catch (error) {
    console.error("EmailJS:", error);
    toast.error("Unable to send your message. Please try again.");
  } finally {
    setIsSending(false);
  }
};
 
        return(
            <section
             id="contact" 
             className=" py-24 px-4 relative bg-secondary/30"
             > 
             <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>
                <p className=" text-center text-muted-forground mb-12 max-w-2xl mx-auto">
                  Have a projects in mind or want to collaborate? Feel free to reach out.
                  I'm always open to discussing new opportunities.
                </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@example.com"
                                    target="_blank"  
                                    rel="noopener noreferrer"
                                     className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    nodemrufin@gmail.com
                                </a>
                            </div>
                        </div>

                          <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel:+11234564534"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                   +1 (123) 456-4534
                                </a>
                            </div>
                        </div>

                          <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a 
                                className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Ottawa, ON, Canada
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">
                            Connect With Me
                        </h4>
                        <div className=" flex space-x-4 justify-center">
                            <a href="https://linkedin.com/in/keyanla-derrick" target="_blank">
                               <FaLinkedin size={20} />
                            </a>
                            <a href="#" target="_blank">
                               <FaInstagram size={20} />
                            </a>
                            <a href="#" target="_blank">
                               <FaYoutube size={20} />
                            </a>
                        </div>
                     </div>
                </div>
                   <div className="bg-card p-8 rounded-lg shadow-xs"
                   >
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"
                                >
                                 {" "}
                                 Your Name
                                </label>
                                <input 
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Keyanla Derrick..."
                                 />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"
                                >
                                 {" "}
                                 Your Email
                                </label>
                                <input 
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="john@mail.com..."
                                 />
                            </div>
                               <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"
                                >
                                 {" "}
                                 Your Message
                                </label>
                                <textarea
                                id="message"
                                name="message"
                                required
                                rows={2}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="hello, I'd like to talk about..."
                                 />
                            </div>
                            <button 
                            type="submit"
                             disabled={isSending}
                            className={cn(
                             "cosmic-button w-full flex items-center justify-center gap-2 "
                            )}
                            >
                                  {isSending ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                     </div>
                </div>
            </div>
            </section>
        );
    
};



       