
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact the AutoMart team.",
};

export default function ContactPage() {
  return (
    <section className="container-page py-12">
      <SectionTitle
        eyebrow="GET IN TOUCH"
        title="Contact AutoMart"
        description="Have a question? Send us a message using the form below."
      />

      <div className="mx-auto max-w-2xl">
        <ContactForm />
      </div>
    </section>
  );
}
