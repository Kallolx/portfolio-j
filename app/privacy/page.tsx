"use client";

import Contact from "@/components/Contact";
import Link from "next/link";

const sections = [
  {
    number: "1.",
    title: "INFORMATION COLLECTED",
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold mb-2">Personal Information:</h4>
          <p>
            If you choose to contact me through forms or email, I may collect
            your name, email address, and any message details you provide.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Non-Personal Information:</h4>
          <p>
            Basic data such as browser type, device, and general site usage may
            be collected automatically for analytics purposes.
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "2.",
    title: "HOW INFORMATION IS USED",
    content: (
      <ul className="space-y-4 list-disc pl-4">
        <li>To respond to inquiries or project requests.</li>
        <li>To improve the website's content, design, and user experience.</li>
        <li>To maintain communication regarding collaborations or services.</li>
      </ul>
    ),
  },
  {
    number: "3.",
    title: "INFORMATION SHARING",
    content: (
      <p>
        I respect your privacy. Your information will never be sold, traded, or
        shared with third parties, except when required by law or to fulfill a
        direct service you've requested.
      </p>
    ),
  },
  {
    number: "4.",
    title: "COOKIES & ANALYTICS",
    content: (
      <p>
        This website may use cookies or analytics tools (like Google Analytics)
        to understand how visitors interact with the site. These tools help
        improve performance but do not collect personal, identifiable details
        without your consent.
      </p>
    ),
  },
  {
    number: "5.",
    title: "DATA SECURITY",
    content: (
      <p>
        Reasonable steps are taken to protect your information against
        unauthorized access, disclosure, or misuse. However, please note that no
        method of data transmission over the internet is 100% secure.
      </p>
    ),
  },
  {
    number: "6.",
    title: "THIRD-PARTY LINKS",
    content: (
      <p>
        This site may contain links to external websites. I am not responsible
        for the privacy practices or content of those sites, and encourage you
        to review their policies separately.
      </p>
    ),
  },
  {
    number: "7.",
    title: "YOUR RIGHTS",
    content: (
      <p>
        You may request access, correction, or deletion of any personal
        information you've shared at any time by contacting me directly.
      </p>
    ),
  },
  {
    number: "8.",
    title: "UPGRADE TO THIS POLICY",
    content: (
      <p>
        This Privacy Policy may be updated occasionally to reflect changes in
        practice, technology, or legal requirements. Updates will be posted on
        this page with a revised effective date.
      </p>
    ),
  },
  {
    number: "9.",
    title: "CONTACT",
    content: (
      <p>
        For questions about this Privacy Policy or how your information is
        handled, please reach out via the{" "}
        <Link href="/contact" className="text-orange-500 hover:underline">
          contact page
        </Link>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pt-48 pb-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 mb-32 items-start">
          <h1 className="text-6xl font-serif text-primary tracking-tighter leading-none">
            Privacy Policy
          </h1>

          <div className="space-y-8 max-w-xl text-primary font-mono">
            <p className="text-xl font-serif font-medium">
              Effective Date: Oct 16, 2025
            </p>
            <p className="text-md leading-relaxed tracking-tight">
              Your trust matters. This policy explains how your information is
              collected, used, and protected to ensure a safe and transparent
              experience.
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
