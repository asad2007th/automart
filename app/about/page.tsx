
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the AutoMart used car marketplace demo.",
};

export default function AboutPage() {
  return (
    <section className="container-page py-12">
      <SectionTitle
        eyebrow="ABOUT AUTOMART"
        title="A simpler way to explore used cars"
        description="AutoMart is a student-built frontend marketplace project."
      />

      <div className="card p-7 md:p-10">
        <h2 className="text-2xl font-bold">Our project</h2>
        <p className="mt-4 leading-8 text-slate-600">
          AutoMart is designed to make browsing used cars simple. Visitors can
          explore sample car listings, search and filter vehicles, view car
          details, save favourites and try a demo car submission form.
        </p>

        <h2 className="mt-8 text-2xl font-bold">Our features</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
          <li>Browse a collection of used cars.</li>
          <li>Search, filter and sort car listings.</li>
          <li>Open a separate details page for each car.</li>
          <li>Save favourite cars.</li>
          <li>Try contact and car submission forms.</li>
          <li>Use the website on desktop and mobile screens.</li>
        </ul>

        <p className="mt-8 rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
          AutoMart is an educational frontend project. It does not use a real
          database or process actual vehicle sales.
        </p>
      </div>
    </section>
  );
}
