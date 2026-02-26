"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import StripePattern from "./StripePattern";
import NavSparkle from "./NavSparkle";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "CASE STUDY", href: "/case-study" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 -z-20 bg-background" />
      <StripePattern
        color="#acc4ff"
        opacity={1}
        gap={2}
        strokeWidth={1}
        className="-z-10"
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div className="font-serif font-medium text-2xl text-primary">
              James Parker
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <React.Fragment key={link.name}>
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`font-mono text-md hover:font-bold text-primary transition-colors duration-300 relative group ${
                        isActive ? "font-bold" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                  {index < navLinks.length - 1 && (
                    <NavSparkle index={(index % 4) as 0 | 1 | 2 | 3} />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Email/CTA with Slide Animation */}
          <motion.a
            href="mailto:hello@james.com"
            aria-label="Email hello@james.com"
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block h-10 overflow-hidden border border-primary/20 rounded-full group px-4 relative"
          >
            <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-10">
              {/* Primary content (Blue) */}
              <div className="flex items-center gap-2 h-10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5A2.25 2.25 0 0122.5 6.75v10.5a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 17.25V6.75zM3.75 6.75v.768l8.25 5.062 8.25-5.062V6.75H3.75z" />
                </svg>
                <span className="font-mono text-md">hello@james.com</span>
              </div>

              {/* Hover content (Orange) */}
              <div className="flex items-center gap-2 h-10 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5A2.25 2.25 0 0122.5 6.75v10.5a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 17.25V6.75zM3.75 6.75v.768l8.25 5.062 8.25-5.062V6.75H3.75z" />
                </svg>
                <span className="font-mono text-md">hello@james.com</span>
              </div>
            </div>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className="w-6 h-0.5 bg-text-primary" />
            <span className="w-6 h-0.5 bg-text-primary" />
            <span className="w-6 h-0.5 bg-text-primary" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
