import type { Metadata } from "next";
import RefundClient from "./RefundClient";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Transparency and fairness in all projects. Review the conditions under which refunds may be issued.",
  alternates: {
    canonical: "/refund",
  },
};

export default function Page() {
  return <RefundClient />;
}
