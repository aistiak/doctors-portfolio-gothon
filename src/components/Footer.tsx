import { Stethoscope, ExternalLink, Heart, Share2 } from "lucide-react";
import { doctor } from "@/data/doctor";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-white">Dr. Tuhin Talukder</p>
                <p className="text-xs">Hepatobiliary Surgeon</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Providing expert surgical care in general and hepatobiliary
              surgery at SHIP International Hospital, Uttara, Dhaka.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: "#portfolio", label: "Work History" },
                { href: "#research", label: "Research" },
                { href: "#academic", label: "Academic" },
                { href: "#appointment", label: "Book Appointment" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Connect</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={doctor.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-teal-400"
                >
                  <Share2 className="h-4 w-4" />
                  Facebook Profile
                </a>
              </li>
              <li>
                <a
                  href={doctor.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-teal-400"
                >
                  <ExternalLink className="h-4 w-4" />
                  DoctorDorkar Profile
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm">
              {doctor.hospital}
              <br />
              {doctor.location}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} Dr. Md. Tuhin Talukder. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1 text-sm">
            Built with <Heart className="h-3.5 w-3.5 text-teal-500" /> for
            better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
