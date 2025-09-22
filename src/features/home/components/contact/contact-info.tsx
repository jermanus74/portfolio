"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactInfoItem } from "./contact-info-item";
import { ResponseTimeNote } from "./response-timenote";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a friendly chat about technology and
          development.
        </p>
      </div>

      <div className="space-y-6">
        <ContactInfoItem
          icon={<Mail className="h-5 w-5 text-accent" />}
          label="Email"
          value="hello@jermanus.dev"
          href="mailto:hello@jermanus.dev"
        />
        <ContactInfoItem
          icon={<Phone className="h-5 w-5 text-accent" />}
          label="Phone"
          value="+1 (234) 567-8900"
          href="tel:+1234567890"
        />
        <ContactInfoItem
          icon={<MapPin className="h-5 w-5 text-accent" />}
          label="Location"
          value="Available for remote work worldwide"
        />
      </div>

      <ResponseTimeNote />
    </motion.div>
  );
}
