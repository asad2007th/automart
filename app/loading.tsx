
export default function Loading() {
  return (
    <div className="container-page flex min-h-96 items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-red-600" />
        <p className="mt-4 font-semibold text-slate-600">
          Loading AutoMart...
        </p>
      </div>
    </div>
  );
}
