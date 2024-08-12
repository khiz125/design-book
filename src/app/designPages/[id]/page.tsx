import React, { FC } from 'react';
import { InvitationCard } from './InvitationCard';
import { AnimatedBorder } from './AnimatedBorder';
import { UsingColors } from './UsingColors';

type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}


const Page: FC<PageProps> = ({params, searchParams}) => {
  // const params = useParams();
  const { id } = params;
  console.log("params", params)
  console.log("searchParams", searchParams)

  let content;
  switch (id) {
    case 'InvitationCard':
      content = (
        <InvitationCard />
      );
      break;
    case 'AnimatedBorder':
      content = (
        <AnimatedBorder />
      );
      break;
    case 'UsingColors':
      content = (
        <UsingColors />
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