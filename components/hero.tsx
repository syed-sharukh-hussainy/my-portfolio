"use client";
import ThemeToggle from "./theme-toggle";
import SocialButtons from "./social-buttons";
import Profile from "./profile";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

const Hero = () => {
  const pathName = usePathname();

  return (
    <section className="mx-5 md:mx-0">
      <div className="flex items-center justify-between">
        <Profile />
        <ThemeToggle />
      </div>
      <SocialButtons />
      <p className="text-muted-foreground my-10 text-lg text-center md:text-start">
        Hi, I&apos;m{" "}
        <span className="text-primary font-bold">Syed Sharukh Hussainy, </span>{" "}
        a <span className="text-primary font-bold">front-end developer</span>{" "}
        from India. I love creating awesome websites and small software tools.
        Let's make cool stuff together!
      </p>
      <div className="flex gap-4 mb-7 items-center">
        <Link
          className={cn(
            "text-muted-foreground hover:text-primary transition-all",
            pathName === "/" && "text-primary"
          )}
          href="/"
        >
          /feed
        </Link>
        <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
        <Link
          className={cn(
            "text-muted-foreground hover:text-primary transition-all",
            pathName === "/projects" && "text-primary"
          )}
          href="/projects"
        >
          /projects
        </Link>
      </div>
      <Separator />
    </section>
  );
};

export default Hero;
