const FeedTag = ({ label }: { label: string }) => {
  return (
    <div className="w-fit text-muted-foreground text-sm border py-1 px-5 inline-block rounded-lg group-hover:bg-muted group-hover:text-primary transition-all">
      <p>{label}</p>
    </div>
  );
};

export default FeedTag;
