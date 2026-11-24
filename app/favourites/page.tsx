
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FavoritesList from "@/components/FavoritesList";

export const metadata: Metadata = {
  title: "My Favourites",
  description: "View your saved favourite cars on AutoMart.",
};

export default function FavouritesPage() {
  return (
    <div className="container-page py-12">
      <SectionTitle
        eyebrow="YOUR SAVED CARS"
        title="My favourites"
        description="All the cars you have saved in one place."
      />

      <FavoritesList />
    </div>
  );
}
