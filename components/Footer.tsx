
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer mt-16">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-black">AutoMart.</h2>
          <p className="mt-3 max-w-xs text-sm text-slate-300">
            A simple frontend marketplace demo for exploring used cars in Pakistan.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick links</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            <Link href="/cars">Browse cars</Link>
            <Link href="/sell-car">Sell your car</Link>
            <Link href="/favourites">My favourites</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Explore AutoMart</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} AutoMart. Educational project demo.
      </div>
    </footer>
  );
}
