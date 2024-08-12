import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";

const Home = () => {
  const pages = [
    { id: "InvitationCard", title: "InvitationCard" },
    { id: "AnimatedBorder", title: "AnimatedBorder" },
    { id: "UsingColors", title: "UsingColors" },
  ];
  return (
    <main className="flex flex-col justify-center w-full m-4">
      <Header />
      <p>
        hello world
      </p>
      <div className="grid items-center auto-fit-[20rem] gap-4">
        {pages.map((page) => (
          <div>
          <Card key={page.id} href={`/designPages/${page.id}`}>
          <p>{page.title}</p>
          </Card>
          </div>
        ))}
      </div>
    </main>
  );
}
export default Home;