import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { InvitationCard } from "./components/designPages";

const Home = () => {
  const components: React.ReactNode[] = [
    <InvitationCard key="card" />,
    <InvitationCard key="card" />,
    <InvitationCard key="card" />,
    <InvitationCard key="card" />
  ];
  return (
    <main className="flex flex-col justify-center w-full m-4">
      <Header />
      <p>
        hello world
      </p>
      <div className="grid items-center auto-fit-[20rem] gap-4">
        {components.map((component, index) => (
          <Card key={index} component={component} />
        ))}

      </div>
    </main>
  );
}
export default Home;