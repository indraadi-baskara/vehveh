import { type ReactNode } from "react";

import { twMerge } from "tailwind-merge";

type TypeSectionWrapperProps = {
  children: ReactNode;
  className?: string;
};

const SectionWrapper = ({
  children,
  className = "",
}: TypeSectionWrapperProps) => {
  return <section className={twMerge("px-3", className)}>{children}</section>;
};

export default SectionWrapper;
