import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import InvitationCard from "./components/designPages/InvitationCard";

const Home = () => {
  return (
    <main className="flex flex-col justify-center w-full">
      <Header />
      <p>
        hello world
      </p>
      <Card><InvitationCard /></Card>
    </main>
  );
}
export default Home;