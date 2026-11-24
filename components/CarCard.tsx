
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/data/cars";
import { useFavorites } from "@/components/FavoritesProvider";

function formatPrice(price: number) {
  return `PKR ${(price / 100000).toFixed(1)} lac`;
}

export default function CarCard({ car }: { car: Car }) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <article className="card flex h-full flex-col">
      <div className="relative h-52 w-full overflow-hidden bg-slate-200">
        <Image
          src={car.image}
          alt={`${car.make} ${car.model}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-bold shadow">
          {car.year}
        </span>

        <button
          type="button"
          onClick={() => toggleFavorite(car.id)}
          aria-label="Toggle favourite"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow"
        >
          <span className={isFavorite(car.id) ? "text-red-600" : "text-slate-400"}>
            ♥
          </span>
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-slate-500">
          {car.location} · {car.transmission}
        </p>

        <h3 className="mt-2 text-xl font-extrabold text-slate-900">
          {car.make} {car.model}
        </h3>

        <p className="mt-2 text-2xl font-black text-red-600">
          {formatPrice(car.price)}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
          <p>{car.mileage.toLocaleString()} km</p>
          <p>{car.fuel}</p>
        </div>

        <Link
          href={`/cars/${car.id}`}
          className="primary-button mt-5 w-full"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
