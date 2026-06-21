import { BookOpen, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { research } from "@/data/doctor";

export default function Research() {
  return (
    <section id="research" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Research"
          title="Publications & Studies"
          description="Contributions to national and international medical literature in hepatobiliary and surgical sciences."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {research.map((paper) => (
            <article
              key={paper.title}
              className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-600">
                  {paper.type}
                </span>
                <span className="text-sm font-medium text-slate-400">
                  {paper.year}
                </span>
              </div>

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                <FileText className="h-5 w-5" />
              </div>

              <h3 className="text-lg font-bold leading-snug text-slate-900">
                {paper.title}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-sm text-teal-600">
                <BookOpen className="h-4 w-4" />
                {paper.journal}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-500">
                {paper.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
