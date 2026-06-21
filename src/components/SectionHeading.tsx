interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <span
        className={`mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
          light
            ? "bg-white/20 text-teal-100"
            : "bg-teal-50 text-teal-600"
        }`}
      >
        {label}
      </span>
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-teal-100/80" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
