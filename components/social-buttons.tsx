import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    label: "Contact",
    icon: ArrowUpRight,
  },
];

const SocialButtons = () => {
  return (
    <section className="my-10 flex gap-3 flex-col md:flex-row">
      {socials.map((social, index) => (
        <Link
          href="mailto:sharukhsyed.hussainy@gmail.com"
          key={index}
          className="flex gap-4 text-muted-foreground hover:text-primary transition-all border hover:border-primary/30 px-5 py-3 rounded-xl items-center"
        >
          <social.icon className="h-5 w-5 " />
          <p>{social.label}</p>
        </Link>
      ))}
    </section>
  );
};

export default SocialButtons;
