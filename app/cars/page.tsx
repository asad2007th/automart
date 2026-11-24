
import type { Metadata } from "next";
import { cars } from "@/data/cars";
import CarBrowser from "@/components/CarBrowser";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Browse Cars",
  description: "Search and filter used cars on AutoMart.",
};

export default function CarsPage() {
  return (
    <section className="container-page py-12">
      <SectionTitle
        eyebrow="OUR MARKETPLACE"
        title="Explore used cars"
        description="Search, filter and compare cars to find the right option."
      />

      <CarBrowser cars={cars} />
    </section>
  );
}
