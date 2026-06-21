"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { doctor } from "@/data/doctor";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "male",
    phone: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="appointment"
      className="bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-700 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Appointment"
          title="Book a Consultation"
          description="Schedule your visit at Ship International Hospital. Available on Sundays and Tuesdays."
          light
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                <Clock className="h-5 w-5" />
                Chamber Schedule
              </h3>
              <ul className="mt-4 space-y-2">
                {doctor.schedule.map((slot) => (
                  <li
                    key={slot.day}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                      slot.available
                        ? "bg-white/15 text-white"
                        : "text-teal-200/60"
                    }`}
                  >
                    <span className="font-medium">{slot.day}</span>
                    <span>{slot.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                <MapPin className="h-5 w-5" />
                Location
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-teal-100">
                {doctor.hospital}
                <br />
                {doctor.location}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">Consultation Fees</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-4 text-center">
                  <p className="text-xs text-teal-200">New Patient</p>
                  <p className="mt-1 text-xl font-bold text-white">
                    {doctor.fees.newPatient}
                  </p>
                </div>
                <div className="rounded-xl bg-white/10 p-4 text-center">
                  <p className="text-xs text-teal-200">Old Patient</p>
                  <p className="mt-1 text-xl font-bold text-white">
                    {doctor.fees.oldPatient}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                <Phone className="h-5 w-5" />
                Contact
              </h3>
              <p className="mt-3 text-sm text-teal-100">
                For urgent inquiries, please contact the hospital directly or
                visit during chamber hours.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8 lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                  <CheckCircle2 className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Appointment Request Sent!
                </h3>
                <p className="mt-3 max-w-sm text-slate-500">
                  Thank you, {form.name}. We&apos;ll contact you at{" "}
                  {form.phone} to confirm your appointment.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      age: "",
                      gender: "male",
                      phone: "",
                      date: "",
                      message: "",
                    });
                  }}
                  className="mt-8 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-bold text-slate-900">
                  Request an Appointment
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Fill in your details and we&apos;ll get back to you shortly.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="age"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Age
                    </label>
                    <input
                      id="age"
                      type="number"
                      required
                      min={1}
                      max={120}
                      value={form.age}
                      onChange={(e) =>
                        setForm({ ...form, age: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                      placeholder="Age"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      value={form.gender}
                      onChange={(e) =>
                        setForm({ ...form, gender: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                      placeholder="Brief description of your condition or reason for visit"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition-all hover:bg-teal-700 hover:shadow-teal-600/40"
                >
                  <Send className="h-4 w-4" />
                  Submit Appointment Request
                </button>

                <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  Available: Sunday & Tuesday, 3:00 PM – 5:00 PM
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
