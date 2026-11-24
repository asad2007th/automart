
import Image from "next/image";
import Link from "next/link";

import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";
import SectionTitle from "@/components/SectionTitle";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Find your next used car with AutoMart Pakistan.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-slate-950 text-white">
        <div className="container-page grid items-center gap-10 py-14 md:grid-cols-2 md:py-24">

          <div>
            <p className="font-bold uppercase tracking-widest text-red-500">
              Your next ride starts here
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Find the car that{" "}
              <span className="text-red-500">moves you.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-slate-300">
              Discover quality used cars, compare prices and find
              the perfect vehicle for your journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/cars"
                className="primary-button"
              >
                Explore Cars
              </Link>

              <Link
                href="/sell-car"
                className="secondary-button border-white bg-transparent text-white hover:bg-white hover:text-slate-950"
              >
                Sell Your Car
              </Link>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <h3 className="text-2xl font-black">15+</h3>
                <p className="text-sm text-slate-400">Sample Cars</p>
              </div>

              <div>
                <h3 className="text-2xl font-black">Easy</h3>
                <p className="text-sm text-slate-400">Car Search</p>
              </div>

              <div>
                <h3 className="text-2xl font-black">Free</h3>
                <p className="text-sm text-slate-400">Demo Listings</p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative h-64 overflow-hidden rounded-3xl border border-white/10 shadow-2xl sm:h-80 md:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=90"
              alt="Modern luxury car"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="container-page py-16">

        <SectionTitle
          eyebrow="HANDPICKED LISTINGS"
          title="Featured Cars"
          description="Explore some popular cars available in our marketplace."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.slice(0, 3).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/cars"
            className="primary-button"
          >
            View All Cars →
          </Link>
        </div>

      </section>

      {/* SELL YOUR CAR SECTION */}
      <section className="container-page pb-16">

        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-red-600 p-8 text-white md:flex-row md:items-center md:p-12">

          <div>
            <p className="font-bold uppercase tracking-widest text-red-200">
              Have a car to sell?
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Sell Your Car with AutoMart
            </h2>

            <p className="mt-3 max-w-xl text-red-100">
              Create a sample car listing and showcase your vehicle
              to potential buyers.
            </p>
          </div>

          <Link
            href="/sell-car"
            className="shrink-0 rounded-xl bg-white px-6 py-3 font-bold text-red-700 transition hover:bg-red-100"
          >
            Start Selling →
          </Link>

        </div>

      </section>
    </>
  );
}
