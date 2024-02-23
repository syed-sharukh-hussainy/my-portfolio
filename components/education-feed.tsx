import CardDialog from "./card-dialog";
import FeedCard from "./feed-card";
import StepsGroups from "./steps-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const education = [
  {
    collegeName: "Narayana Engineering College",
    course: "Computer Science Engineering",
    degree: "Bachelor of Technology",
    year: "2015 - 2019",
    gpa: "7.1",
  },
  {
    collegeName: "Narayana Junior College",
    course: "MPC",
    degree: "Intermediate",
    year: "2012 - 2014",
    gpa: "7.1",
  },
  {
    collegeName: "Ratnam High School",
    course: "Secondary School Certificate",
    degree: "SSC",
    year: "2012",
    gpa: "7.1",
  },
];

const EducationFeed = () => {
  return (
    <CardDialog
      title="Education"
      description="More information about my education."
      trigger={
        <FeedCard feedTag="Education">
          <div className="border rounded-lg p-5 flex flex-col gap-5 overflow-hidden mt-10 group-hover:bg-secondary transition-all">
            {education.map((item, index) => (
              <StepsGroups
                key={index}
                title={item.collegeName}
                subTitle={item.course}
              />
            ))}
          </div>
        </FeedCard>
      }
      content={
        <div className="mt-5">
          {education.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center pt-5">
                <div className="text-start">
                  <p className="text-sm">{item.collegeName}</p>
                  <p className="text-muted-foreground">{item.course}</p>
                </div>
                <div className="w-28 text-end">
                  <p className="text-sm">{item.year}</p>
                  <p className="text-muted-foreground text-sm">
                    CGPA : {item.gpa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
};

export default EducationFeed;
