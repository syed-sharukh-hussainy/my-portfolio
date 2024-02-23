"use client";

import EducationFeed from "./education-feed";
import ExperienceFeed from "./experience-feed";
import ProjectsFeed from "./project-feeds";
import SkillsFeed from "./skills-feed";
import SocialFeed from "./social-feed";

const MyFeed = () => {
  return (
    <section className="mx-5 md:mx-0">
      <h5 className="font-bold text-xl my-10">My Feed</h5>
      <ProjectsFeed />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
        <EducationFeed />
        <ExperienceFeed />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <SkillsFeed />
        <SocialFeed />
      </div>
    </section>
  );
};

export default MyFeed;
