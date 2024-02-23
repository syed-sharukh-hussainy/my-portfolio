import React from "react";
import FeedCard from "./feed-card";
import StepsGroups from "./steps-group";

import CardDialog from "./card-dialog";

const ExperienceFeed = () => {
  return (
    <CardDialog
      title="Experience"
      description="More information about my experience."
      trigger={
        <FeedCard feedTag="Experience">
          <div className="border group-hover:bg-secondary rounded-lg p-5 flex flex-col gap-5 overflow-hidden mt-10 text-start transition-all ">
            <StepsGroups title="Cognizant" subTitle="Programmer Analyst" />
          </div>
        </FeedCard>
      }
      content={
        <div className="flex items-center justify-between mt-8">
          <div className="text-start">
            <p className="text-sm">Cognizant</p>
            <p className="text-muted-foreground">Programmer Analyst</p>
          </div>
          <p className="text-sm">2019-2021</p>
        </div>
      }
    />
  );
};

export default ExperienceFeed;
