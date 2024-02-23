import { useTheme } from "next-themes";
import FeedCard from "./feed-card";
import Image from "next/image";

const skills = [
  {
    label: "Javascript",
    image: "/js.png",
  },
  {
    label: "Typescript",
    image: "/ts.png",
  },
  {
    label: "React",
    image: "/react.webp",
  },
  {
    label: "NextJS",
    darkImage: "/next-dark.svg",
    lightImage: "/next-light.svg",
  },
  {
    label: "Tailwindcss",
    image: "/tailwindcss.png",
  },
  {
    label: "HTML",
    image: "/html-5.png",
  },
  {
    label: "CSS",
    image: "/css-3.png",
  },
];

const SkillsFeed = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <FeedCard feedTag="Skills">
      <div className="grid grid-cols-2 md:grid-cols-3 rounded-lg mt-10 gap-3">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="border rounded-lg flex items-center gap-3 p-3 group-hover:bg-secondary transition-colors"
          >
            {skill.image ? (
              <Image
                src={skill.image}
                width={36}
                height={36}
                alt={skill.label}
              />
            ) : (
              <Image
                src={theme === "dark" ? skill.lightImage! : skill.darkImage!}
                width={36}
                height={36}
                alt={skill.label}
              />
            )}
            <p className="text-sm text-muted-foreground group-hover:text-primary transition-all">
              {skill.label}
            </p>
          </div>
        ))}
      </div>
    </FeedCard>
  );
};

export default SkillsFeed;
