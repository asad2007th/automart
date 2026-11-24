
"use client";

import { useMemo, useState } from "react";
import type { Car } from "@/data/cars";
import CarCard from "@/components/CarCard";

type CarBrowserProps = {
  cars: Car[];
};

export default function CarBrowser({ cars }: CarBrowserProps) {
  const [search, setSearch] = useState("");
  const [make, setMake] = useState("All");
  const [sort, setSort] = useState("newest");

  const makes = ["All", ...Array.from(new Set(cars.map((car) => car.make)))];

  const filteredCars = useMemo(() => {
    let result = cars.filter((car) => {
      const searchText =
        `${car.make} ${car.model} ${car.location}`.toLowerCase();

      return (
        searchText.includes(search.toLowerCase()) &&
        (make === "All" || car.make === make)
      );
    });

    if (sort === "newest") {
      result = [...result].sort((a, b) => b.year - a.year);
    } else if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [cars, search, make, sort]);

  return (
    <div>
      <div className="mb-8 grid gap-4 rounded-2xl border bg-white p-5 shadow-sm md:grid-cols-3">
        <div>
          <label className="label" htmlFor="car-search">Search cars</label>
          <input
            id="car-search"
            className="field"
            placeholder="Search make, model or city..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div>
          <label className="label" htmlFor="car-make">Car company</label>
          <select
            id="car-make"
            className="field"
            value={make}
            onChange={(event) => setMake(event.target.value)}
          >
            {makes.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="label" htmlFor="car-sort">Sort by</label>
          <select
            id="car-sort"
            className="field"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="newest">Newest first</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <p className="mb-5 text-sm text-slate-500">
        Showing {filteredCars.length} cars
      </p>

      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border bg-white p-10 text-center">
          <h2 className="text-xl font-bold">No cars found</h2>
          <p className="mt-2 text-slate-500">
            Try another search or select a different company.
          </p>
          <button
            className="primary-button mt-5"
            onClick={() => {
              setSearch("");
              setMake("All");
              setSort("newest");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
