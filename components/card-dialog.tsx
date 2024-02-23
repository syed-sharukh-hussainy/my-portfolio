import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface CardDialogProps {
  trigger: ReactNode;
  content: ReactNode;
  title: string;
  description: string;
}

const CardDialog = ({
  trigger,
  content,
  title,
  description,
}: CardDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl w-full p-8">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="mt-5">{content}</div>
      </DialogContent>
    </Dialog>
  );
};

export default CardDialog;
