import React from "react";
import Image from "next/image";
import { projects } from "@/lib/constants";
import CardContainer from "./card-container";
import FeedTag from "./feed-tag";
import CardDialog from "./card-dialog";
import ProjectDetails from "./project-card";

const ProjectsFeed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {projects.slice(0, 3).map((project, index) => (
        <CardDialog
          key={index}
          title={project.label}
          description={project.description}
          trigger={
            <CardContainer>
              <FeedTag label="Project" />
              <div className="my-4">
                <p className="text-start text-muted-foreground group-hover:text-primary font-medium transition-all text-base">
                  {project.label}
                </p>
                <p className="text-sm mt-2 line-clamp-2 text-muted-foreground text-start">
                  {project.description}
                </p>
              </div>
              <Image
                src={project.image}
                width={400}
                height={400}
                alt={project.label}
                className="bg-red-100 h-48 object-cover rounded-lg"
              />
            </CardContainer>
          }
          content={
            <ProjectDetails
              about={project.about!}
              image={project.image}
              label={project.label}
              technologies={project.technologies}
              githubLink={project.githubLink}
              website={project.website}
            />
          }
        />
      ))}
    </div>
  );
};

export default ProjectsFeed;
