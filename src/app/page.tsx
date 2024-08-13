import React, { Suspense } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Loading from "./designbook/[id]/loading";

const Home = () => {
  const pages = [
    { id: "invitation-card", title: "Invitation Card" },
    { id: "animated-border", title: "Animated Border" },
    { id: "using-colors", title: "Using Colors" },
  ];
  return (
    <main className="flex flex-col justify-center w-full">
      <Header />
      <Suspense fallback={<Loading />}>
        <p>
          hello world
        </p>
        <section className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 justify-items-center items-center">
          {pages.map((page) => (
            <div key={page.id} className="w-full flex flex-col justify-center items-center " >
              <Card href={`/designbook/${page.id}`}>
                {page.id}
              </Card>
              <p>{page.title}</p>
            </div>
          ))}
        </section>
      </Suspense>
    </main>
  );
}
export default Home;