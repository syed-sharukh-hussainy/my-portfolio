import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailsProps {
  image: string;
  about: string;
  label: string;
  technologies: string[];
  website?: string;
  githubLink?: string;
}

const ProjectDetails = ({
  image,
  about,
  label,
  technologies,
  website,
  githubLink,
}: ProjectDetailsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={image}
        alt={label}
        width={400}
        height={400}
        className="w-full object-contain rounded-xl"
      />
      <div>
        <h5 className="font-medium">About</h5>
        <p className="text-sm text-muted-foreground">{about}</p>
      </div>
      <div className="flex items-center gap-2">
        <h5 className="font-medium mb-1">Technologies</h5>
        <div className="flex gap-1 flex-wrap">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="text-xs md:text-sm bg-secondary px-2 py-1 rounded-lg text-muted-foreground"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
      {website ? (
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5" />
          <Link
            className="text-blue-600 hover:underline text-sm line-clamp-1"
            href={website!}
          >
            {website}
          </Link>
        </div>
      ) : null}
      {githubLink ? (
        <div className="flex items-center gap-2">
          <Github className="w-5 h-5" />
          <Link
            className="text-blue-600 hover:underline text-sm line-clamp-1"
            href={githubLink!}
          >
            {githubLink}
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectDetails;
