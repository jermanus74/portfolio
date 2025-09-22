"use client";

import { ContactForm } from "../components/contact/contact-form";
import { ContactInfo } from "../components/contact/contact-info";
import { SectionHeader } from "../components/contact/contact-section-header";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
