import React, { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

// ✅ Environment Variables
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const contactTemplateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const autoReplyMessage = import.meta.env.VITE_REPLY_MESSAGE;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let tempErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      tempErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // ✅ Step 1: Send message to yourself
      await emailjs.send(
        serviceId,
        contactTemplateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      // ✅ Step 2: Send auto-reply to user
      await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        {
          to_name: formData.name,
          to_email: formData.email,
          message: autoReplyMessage,
        },
        publicKey
      );

      setSubmitStatus("success");
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed", error);
      setSubmitStatus("error");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ContactInfo = ({
    icon,
    title,
    content,
    link,
  }: {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
    link?: string;
  }) => (
    <div className="flex items-start">
      <div className="p-3 bg-primary/10 rounded-full mr-4">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        {link ? (
          <a href={link} target="_blank" className="text-muted hover:text-primary transition-colors">
            {content}
          </a>
        ) : (
          <div className="text-muted">{content}</div>
        )}
      </div>
    </div>
  );

  return (
    <section id="contact">
      <div className="container">
        <SectionTitle>Get In Touch</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted mb-6">
              I'm currently looking for new opportunities to apply my skills and knowledge. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>

            <div className="space-y-6">
              <ContactInfo icon={<User size={20} className="text-primary" />} title="Name" content="Ankit Tiwari" />
              <ContactInfo icon={<Mail size={20} className="text-primary" />} title="Email" content="ankit827691@gmail.com" link="mailto:ankit827691@gmail.com" />
              <ContactInfo
                icon={<MessageSquare size={20} className="text-primary" />}
                title="Social Media"
                content={
                  <div className="flex space-x-4 mt-2">
                    <a href="https://github.com/Ankit2004tiwari" target="_blank" className="text-muted hover:text-primary">GitHub</a>
                    <a href="https://www.linkedin.com/in/ankit-tiwari-a90881217/" target="_blank" className="text-muted hover:text-primary">LinkedIn</a>
                  </div>
                }
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="card">
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/10 text-green-500 rounded-lg">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 text-red-500 rounded-lg">
                  There was an error sending your message. Please try again later.
                </div>
              )}

              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 pl-10 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                    }`}
                    placeholder="John Doe"
                  />
                  <User size={18} className="absolute top-3.5 left-3 text-muted" />
                </div>
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 pl-10 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                    }`}
                    placeholder="john@example.com"
                  />
                  <Mail size={18} className="absolute top-3.5 left-3 text-muted" />
                </div>
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full p-3 pl-10 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                    }`}
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                  <MessageSquare size={18} className="absolute top-3.5 left-3 text-muted" />
                </div>
                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                ) : (
                  <Send size={18} className="mr-2" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
