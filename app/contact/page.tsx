import ContactSection from "@/components/Contact";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20">
      <h1 className="text-4xl md:text-6xl mb-8 font-serif text-primary">
        Contact
      </h1>
      <p className="text-lg md:text-xl text-[var(--text-secondary)] font-mono mb-12">
        Let&apos;s build something great together. Use the form below or reach
        out via my socials.
      </p>
      {/* Reusing existing contact component for the actual form and details */}
      <ContactSection />
    </div>
  );
}
