
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-96 flex-col items-center justify-center text-center">
      <p className="text-7xl font-black text-red-600">404</p>
      <h1 className="mt-4 text-3xl font-black">Page not found</h1>
      <p className="mt-3 text-slate-500">
        Sorry, the page or car listing you are looking for does not exist.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="primary-button">Go home</Link>
        <Link href="/cars" className="secondary-button">Browse cars</Link>
      </div>
    </div>
  );
}
