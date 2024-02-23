import CardContainer from "./card-container";
import FeedTag from "./feed-tag";

type FeedCardProps = {
  feedTag: string;
  children: React.ReactNode;
};

const FeedCard = ({ feedTag, children }: FeedCardProps) => {
  return (
    <CardContainer>
      <FeedTag label={feedTag} />
      <div>{children}</div>
    </CardContainer>
  );
};

export default FeedCard;
