"use client";
import { useTheme } from "next-themes";
import React from "react";

const NextJSLogo = () => {
  const { theme } = useTheme();
  console.log(theme);
  return <div>NextJSLogo</div>;
};

export default NextJSLogo;
