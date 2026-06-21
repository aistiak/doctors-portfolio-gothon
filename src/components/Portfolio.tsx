import { Briefcase, Building2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { workHistory, achievements } from "@/data/doctor";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Work History"
          description="A distinguished career spanning Dhaka Medical College, BIRDEM Hospital, and SHIP International Hospital."
        />

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-teal-200 via-teal-400 to-teal-200 md:block lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-12">
            {workHistory.map((item, index) => (
              <div
                key={item.organization + item.period}
                className={`relative flex flex-col gap-8 md:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="hidden lg:block lg:w-1/2" />

                <div className="absolute left-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-teal-500 shadow-md md:block lg:left-1/2" />

                <div
                  className={`md:pl-16 lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  <div className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:border-teal-200 hover:bg-white hover:shadow-lg hover:shadow-teal-100/50 sm:p-8">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                        {item.period}
                      </span>
                      <Briefcase className="h-5 w-5 text-teal-400 transition-colors group-hover:text-teal-600" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {item.role}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm font-medium text-teal-600">
                      <Building2 className="h-4 w-4" />
                      {item.organization}
                    </div>

                    <p className="mt-1 text-sm text-slate-400">
                      {item.department}
                    </p>

                    <p className="mt-4 leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-br from-teal-600 to-cyan-700 p-8 sm:p-12">
          <h3 className="text-center text-2xl font-bold text-white">
            Key Achievements
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="flex items-start gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">
                  ✓
                </div>
                <p className="text-sm leading-relaxed text-teal-50">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
