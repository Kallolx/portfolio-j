import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jamil Ifat to start a conversation about web development, technical SEO, or creating impactful digital experiences.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
