
"use client";

import Link from "next/link";
import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";
import { useFavorites } from "@/components/FavoritesProvider";

export default function FavoritesList() {
  const { favorites } = useFavorites();

  const favoriteCars = cars.filter((car) =>
    favorites.includes(car.id)
  );

  return (
    <section>
      {favoriteCars.length > 0 ? (
        <>
          <p className="mb-5 text-slate-500">
            You have saved {favoriteCars.length} favourite car(s).
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-2xl border bg-white p-10 text-center">
          <h2 className="text-xl font-bold">No favourites yet</h2>
          <p className="mt-2 text-slate-500">
            Browse cars and press the heart icon to save your favourites.
          </p>
          <Link href="/cars" className="primary-button mt-5">
            Explore cars
          </Link>
        </div>
      )}
    </section>
  );
}
