"use client";

import Contact from "@/components/Contact";
import Link from "next/link";

const sections = [
  {
    number: "1.",
    title: "PROJECT DEPOSITS",
    content: (
      <p>
        A non-refundable deposit is required to begin any project. This covers
        the initial research, planning, and design preparation time.
      </p>
    ),
  },
  {
    number: "2.",
    title: "CANCELLATIONS BEFORE WORK",
    content: (
      <p>
        If you cancel the project before any design work has started, you may be
        eligible for a partial refund (excluding the deposit).
      </p>
    ),
  },
  {
    number: "3.",
    title: "WORK ALREADY COMPLETED",
    content: (
      <p>
        Once design concepts, drafts, or final files have been shared, refunds
        cannot be issued for the completed work, as time and creative effort
        have already been invested.
      </p>
    ),
  },
  {
    number: "4.",
    title: "CLIENT DISSATISFACTION",
    content: (
      <div className="space-y-6">
        <p>
          If you are not satisfied with the work, I encourage open communication
          to resolve the issue. Revisions will be provided as agreed upon in the
          project scope.
        </p>
        <p>
          Refunds will not be given for change-of-mind or subjective
          dissatisfaction if the work aligns with the approved project brief.
        </p>
      </div>
    ),
  },
  {
    number: "5.",
    title: "DIGITAL DELIVERABLES",
    content: (
      <p>
        Due to the nature of digital design files, all delivered and downloaded
        files are non-refundable.
      </p>
    ),
  },
  {
    number: "6.",
    title: "EXCEPTIONAL CIRCUMSTANCES",
    content: (
      <p>
        Refund requests outside of these terms will be considered on a
        case-by-case basis, with fairness for both parties in mind.
      </p>
    ),
  },
  {
    number: "7.",
    title: "CONTACT",
    content: (
      <p>
        For questions about this Refund Policy or how your information is
        handled, please reach out via the{" "}
        <Link href="/contact" className="text-orange-500 hover:underline">
          contact page
        </Link>
        .
      </p>
    ),
  },
];

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-background pt-48 pb-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 mb-32 items-start">
          <h1 className="text-6xl font-serif text-primary tracking-tighter leading-none">
            Refund Policy
          </h1>

          <div className="space-y-8 max-w-xl text-primary font-mono">
            <p className="text-xl font-serif font-medium">
              Effective Date: Oct 14, 2025
            </p>
            <p className="text-md leading-relaxed tracking-tight">
              I value transparency and fairness in all projects. This Refund
              Policy explains the conditions under which refunds may be issued.
              By engaging with my services, you agree to the terms outlined
              here.
            </p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-40">
          {sections.map((section) => (
            <div
              key={section.title}
              className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start"
            >
              {/* Left Column: Number & Title */}
              <div className="flex gap-4 items-start text-[#0046FF] font-mono text-md font-bold tracking-tight">
                <span>{section.number}</span>
                <h2 className="uppercase">{section.title}</h2>
              </div>

              {/* Right Column: Content */}
              <div className="font-mono text-primary text-md leading-relaxed tracking-tight max-w-xl">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto pt-32">
        <Contact />
      </div>
    </main>
  );
}
