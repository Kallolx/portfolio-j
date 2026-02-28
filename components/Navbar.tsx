"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
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
            <Link href="/" onClick={() => setIsOpen(false)}>
              <motion.div className="font-serif font-medium text-2xl text-primary">
                James Parker
              </motion.div>
            </Link>

            {/* Navigation Links - Desktop */}
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

            {/* Email/CTA - Desktop */}
            <motion.a
              href="mailto:hello@james.com"
              aria-label="Email hello@james.com"
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block h-10 overflow-hidden border border-primary/20 rounded-full group px-4 relative"
            >
              <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-10">
                <div className="flex items-center gap-2 h-10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5A2.25 2.25 0 0122.5 6.75v10.5a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 17.25V6.75zM3.75 6.75v.768l8.25 5.062 8.25-5.062V6.75H3.75z" />
                  </svg>
                  <span className="font-mono text-md">hello@james.com</span>
                </div>
                <div className="flex items-center gap-2 h-10 text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5A2.25 2.25 0 0122.5 6.75v10.5a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 17.25V6.75zM3.75 6.75v.768l8.25 5.062 8.25-5.062V6.75H3.75z" />
                  </svg>
                  <span className="font-mono text-md">hello@james.com</span>
                </div>
              </div>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center z-[70]"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-primary"
                />
                <motion.span
                  animate={
                    isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-primary"
                />
                <motion.span
                  animate={
                    isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-primary"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-background md:hidden flex flex-col pt-32 px-6"
          >
            {/* Branded Pattern for Menu */}
            <div className="absolute inset-0 -z-10">
              <StripePattern
                color="#acc4ff"
                opacity={0.5}
                gap={4}
                strokeWidth={1}
              />
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between"
                  >
                    <span
                      className={`font-serif text-5xl tracking-tight transition-colors duration-300 ${
                        pathname === link.href
                          ? "text-primary"
                          : "text-primary/40 group-hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </span>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: pathname === link.href ? 1 : 0 }}
                      className="w-4 h-4"
                    >
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path
                          d="M12 2 C13.2 8.8 15.2 10.8 22 12 C15.2 13.2 13.2 15.2 12 22 C10.8 15.2 8.8 13.2 2 12 C8.8 10.8 10.8 8.8 12 2Z"
                          fill="var(--primary)"
                        />
                      </svg>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-auto mb-12"
            >
              <p className="font-mono text-xs text-primary/40 uppercase mb-4 tracking-widest">
                get in touch
              </p>
              <a
                href="mailto:hello@james.com"
                className="font-serif text-2xl text-primary"
              >
                hello@james.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
