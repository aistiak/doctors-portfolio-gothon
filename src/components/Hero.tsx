import Image from "next/image";
import {
  Award,
  MapPin,
  Calendar,
  ExternalLink,
  Share2,
} from "lucide-react";
import { doctor } from "@/data/doctor";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/40 to-cyan-50 pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-teal-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-medium text-teal-700 shadow-sm backdrop-blur-sm">
              <Award className="h-4 w-4" />
              {doctor.designation} · {doctor.hospital}
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {doctor.name}
            </h1>

            <p className="mt-4 text-xl font-medium text-teal-600">
              {doctor.title}
            </p>

            <p className="mt-2 text-sm font-medium text-slate-500">
              {doctor.qualifications}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {doctor.about}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition-all hover:bg-teal-700 hover:shadow-teal-600/40"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </a>
              <a
                href={doctor.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-teal-200 hover:text-teal-700"
              >
                <ExternalLink className="h-4 w-4" />
                View Profile
              </a>
              <a
                href={doctor.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:text-blue-600"
              >
                <Share2 className="h-4 w-4" />
                Facebook
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-teal-500" />
              {doctor.hospital}, {doctor.location}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 to-cyan-700 p-1 shadow-2xl shadow-teal-600/20">
                <div className="overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-slate-100 to-teal-50">
                  <div className="relative aspect-[450/350] w-full">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="border-t border-teal-100 bg-white/90 px-6 py-5 backdrop-blur-sm">
                    <p className="text-center text-lg font-bold text-slate-800">
                      {doctor.name}
                    </p>
                    <p className="mt-1 text-center text-sm text-teal-600">
                      {doctor.title}
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {doctor.specialties.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl shadow-slate-200/50">
              <p className="text-3xl font-bold text-teal-600">
                {doctor.experience}
              </p>
              <p className="text-xs font-medium text-slate-500">
                Years of Experience
              </p>
            </div>

            <div className="absolute -top-4 -right-4 rounded-2xl bg-white p-4 shadow-xl shadow-slate-200/50">
              <p className="text-3xl font-bold text-teal-600">1st</p>
              <p className="max-w-[120px] text-xs font-medium text-slate-500">
                FCPS Hepatobiliary Surgeon in Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {doctor.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/60 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm"
            >
              <p className="text-3xl font-bold text-teal-600">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
