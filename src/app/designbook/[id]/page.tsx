import React, { FC } from 'react';
import InvitationCard from './InvitationCard';
import AnimatedBorder from './AnimatedBorder';
import UsingColors from './SplitComplimentTriad';
import UnderConstruction from './UnderConstruction';
import InfinityLoop from './InfinityLoop';
import SmoothScroll from './SmoothScroll';

type PageProps = {
  params: Promise<{ id: string }>;
}


const Page: FC<PageProps> = async({ params }) => {
  const { id } = await params;

  let content;
  switch (id) {
    case 'invitation-card':
      content = (
        <InvitationCard />
      );
      break;
    case 'animated-border':
      content = (
        <AnimatedBorder />
      );
      break;
    case 'using-colors':
      content = (
        <UsingColors />
      );
      break;
    case 'loop-slider':
      content = (
        <InfinityLoop />
      );
      break;
    case 'smooth-scroll':
      content = (
        <SmoothScroll />
      );
      break;
    case 'under-construction':
      content = (
        <UnderConstruction />
      );
      break;
    default:
      content = (
        <div className='flex items-center justify-center h-full'>
          <h1>Page Not Found</h1>
        </div>
      );
  }

  return content;
}

export default Page;