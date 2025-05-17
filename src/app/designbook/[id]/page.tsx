import React, { FC } from "react";
import InvitationCard from "./InvitationCard";
import AnimatedBorder from "./AnimatedBorder";
import UsingColors from "./SplitComplimentTriad";
import UnderConstruction from "./UnderConstruction";
import InfinityLoop from "./InfinityLoop";
import SmoothScroll from "./SmoothScroll";

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page: FC<PageProps> = async ({ params }) => {
  const { id } = await params;

  if (id === "invitation-card") {
    return <InvitationCard />;
  }
  if (id === "animated-border") {
    return <AnimatedBorder />;
  }
  if (id === "using-colors") {
    return <UsingColors />;
  }
  if (id === "loop-slider") {
    return <InfinityLoop />;
  }
  if (id === "smooth-scroll") {
    return <SmoothScroll />;
  }
  if (id === "under-construction") {
    return <UnderConstruction />;
  }

  return (
    <div className="flex items-center justify-center h-full">
      <h1>Page Not Found</h1>
    </div>
  );
};

export default Page;
