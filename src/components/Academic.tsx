import { GraduationCap, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { academic, doctor } from "@/data/doctor";

export default function Academic() {
  return (
    <section id="academic" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Academic"
          title="Qualifications & Credentials"
          description="A rigorous academic foundation from Dhaka Medical College to international fellowship recognition."
        />

        <div className="relative">
          <div className="absolute left-[27px] top-0 hidden h-full w-0.5 bg-teal-100 sm:block" />

          <div className="space-y-6">
            {academic.map((item, index) => (
              <div key={item.degree} className="relative flex gap-6 sm:gap-8">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg shadow-teal-500/25">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div className="flex-1 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:border-teal-200 hover:bg-white hover:shadow-md sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.degree}
                      </h3>
                      <p className="mt-1 font-medium text-teal-600">
                        {item.institution}
                      </p>
                    </div>
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-sm font-semibold text-teal-700">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                  {index === 0 && (
                    <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      International Recognition
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-cyan-50 p-8 sm:p-12">
          <h3 className="text-center text-xl font-bold text-slate-900">
            Areas of Specialization
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {doctor.specialties.map((specialty) => (
              <span
                key={specialty}
                className="rounded-full border border-teal-200 bg-white px-5 py-2.5 text-sm font-medium text-teal-700 shadow-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
