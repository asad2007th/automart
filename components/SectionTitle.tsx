
type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow = "AUTOMART",
  title,
  description
}: SectionTitleProps) {
  return (
    <div className="mb-8">
      <p className="text-sm font-bold uppercase tracking-widest text-red-600">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-3xl font-black text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-2xl text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}
