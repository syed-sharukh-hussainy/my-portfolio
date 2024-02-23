import { ReactNode } from "react";

const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border p-5 rounded-xl bg-muted/30 cursor-pointer group hover:bg-muted/30 hover:border-primary/30 transition-all flex flex-col justify-between h-full">
      {children}
    </div>
  );
};

export default CardContainer;
