import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";

const socials = [
  {
    label: "Contact",
    icon: ArrowUpRight,
  },
  {
    label: "Mail",
    icon: Mail,
  },
  {
    label: "Instagram",
    icon: Instagram,
  },
];

const SocialButtons = () => {
  return (
    <section className="my-10 flex gap-3 flex-col md:flex-row">
      {socials.map((social, index) => (
        <Button
          key={index}
          variant="secondary"
          className="flex gap-4 text-muted-foreground hover:text-primary transition-all border hover:border-primary/30"
        >
          <social.icon className="h-5 w-5 " />
          <p>{social.label}</p>
        </Button>
      ))}
    </section>
  );
};

export default SocialButtons;
