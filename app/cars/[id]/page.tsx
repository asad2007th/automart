
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cars } from "@/data/cars";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const car = cars.find((item) => item.id === id);

  if (!car) {
    return { title: "Car Not Found" };
  }

  return {
    title: `${car.make} ${car.model}`,
    description: `View details of this ${car.year} ${car.make} ${car.model}.`,
  };
}

export default async function CarDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const car = cars.find((item) => item.id === id);

  if (!car) {
    notFound();
  }

  const priceInLacs = (car.price / 100000).toFixed(2);

  return (
    <section className="container-page py-12">
      <Link href="/cars" className="font-semibold text-red-600">
        ← Back to all cars
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="relative h-72 overflow-hidden rounded-2xl bg-slate-200 sm:h-96">
          <Image
            src={car.image}
            alt={`${car.make} ${car.model}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-bold uppercase tracking-widest text-red-600">
            {car.year} • {car.location}
          </p>

          <h1 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            {car.make} {car.model}
          </h1>

          <p className="mt-4 text-3xl font-black text-red-600">
            PKR {priceInLacs} lac
          </p>

          <p className="mt-5 leading-7 text-slate-600">
            {car.description}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm text-slate-500">Mileage</p>
              <p className="font-bold">{car.mileage.toLocaleString()} km</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm text-slate-500">Fuel</p>
              <p className="font-bold">{car.fuel}</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm text-slate-500">Transmission</p>
              <p className="font-bold">{car.transmission}</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm text-slate-500">Colour</p>
              <p className="font-bold">{car.color}</p>
            </div>
          </div>

          <Link href="/contact" className="primary-button mt-7">
            Contact about this car
          </Link>
        </div>
      </div>
    </section>
  );
}
