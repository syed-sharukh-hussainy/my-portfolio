type StepsGroupsProps = {
  title: string;
  subTitle: string;
};

const StepsGroups = ({ title, subTitle }: StepsGroupsProps) => {
  return (
    <div className="flex gap-5 items-start">
      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center relative">
        <div className="w-2 h-2 rounded-full bg-primary/70"></div>
        <div className="absolute w-[2px] h-14 bg-primary/20 top-2"></div>
      </div>
      <div className="text-start">
        <p className="text-sm">{title}</p>
        <p className="text-muted-foreground">{subTitle}</p>
      </div>
    </div>
  );
};

export default StepsGroups;
