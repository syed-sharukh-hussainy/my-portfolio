import React from "react";

import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import CardContainer from "./card-container";
import FeedTag from "./feed-tag";
import FeedCard from "./feed-card";

const socials = [
  {
    username: "Syed Sharukh Hussainy",
    tag: "@syed_sharukh_",
    image: Twitter,
    link: "https://twitter.com/syed_sharukh_",
  },
  {
    username: "Syed Sharukh Hussainy",
    tag: "@syed_sharukh_",
    image: Instagram,
    link: "https://www.instagram.com/syed_._hussain/",
  },
  {
    username: "Syed Sharukh Hussainy",
    tag: "syed-sharukh-hussainy",
    image: Github,
    link: "https://github.com/syed-sharukh-hussainy",
  },
];

const SocialFeed = () => {
  return (
    <FeedCard feedTag="Social">
      <div className="flex gap-4 flex-wrap">
        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.link}
            className="flex rounded-lg border p-3 gap-3 items-center group-hover:bg-secondary transition-all"
          >
            <social.image className="w-8 h-8 text-muted-foreground transition-all group-hover:text-primary" />
            <div className="text-sm text-muted-foreground ">
              <p className="font-medium group-hover:text-primary transition-all">
                {social.username}
              </p>
              <p>{social.tag}</p>
            </div>
          </Link>
        ))}
      </div>
    </FeedCard>
  );
};

export default SocialFeed;
