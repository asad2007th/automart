
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import SellCarForm from "@/components/SellCarForm";

export const metadata: Metadata = {
  title: "Sell Your Car",
  description: "Create a sample used car listing on AutoMart.",
};

export default function SellCarPage() {
  return (
    <section className="container-page py-12">
      <SectionTitle
        eyebrow="SELL WITH AUTOMART"
        title="List your car"
        description="Enter your car details in the form below."
      />

      <div className="mx-auto max-w-2xl">
        <SellCarForm />
      </div>
    </section>
  );
}
