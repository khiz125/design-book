import React from 'react';
import InvitationCard from "@/app/designbook/[id]/InvitationCard";
import AnimatedBorder from "@/app/designbook/[id]/AnimatedBorder";
import UsingColors from "@/app/designbook/[id]/UsingColors";
import UnderConstruction from '@/app/designbook/[id]/UnderConstruction';

interface PageContents {
  id: string;
  title: string;
  component: React.JSX.Element;
}

export const PAGE_CONTENTS:PageContents[] = [
	{ id: "invitation-card", title: "Invitation Card", component: <InvitationCard /> },
	{ id: "animated-border", title: "Animated Border", component: <AnimatedBorder /> },
	{ id: "using-colors", title: "Using Colors", component: <UsingColors /> },
  { id: "under-construction", title: "Under Construction...", component: <UnderConstruction /> },
  { id: "under-construction", title: "Using Colors", component: <UnderConstruction /> },
];
