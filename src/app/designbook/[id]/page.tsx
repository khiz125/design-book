import React, { FC } from 'react';
import InvitationCard from './InvitationCard';
import AnimatedBorder from './AnimatedBorder';
import UsingColors from './UsingColors';
import UnderConstruction from './UnderConstruction';

type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}


const Page: FC<PageProps> = ({ params }) => {
  // const params = useParams();
  const { id } = params;

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
      case 'under-construction':
        content = (
          <UnderConstruction />
        );
        break;
    default:
      content = (
        <div className='flex items-center justify-center'>
          <h1>Page Not Found</h1>
        </div>
      );
  }

  return content;
}

export default Page;