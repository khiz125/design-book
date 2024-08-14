import React, { Suspense } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Loading from "./designbook/[id]/loading";
import { PAGE_CONTENTS } from "./components/constants/contents";

const Home = () => {
  
  return (
    <main className="flex flex-col justify-center bg-gray-50 w-full">
      <Header />
      <Suspense fallback={<Loading />}>
        <p className="flex justify-center items-center w-full h-20">
          hello world
        </p>
        <section className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-items-center items-center">
          {PAGE_CONTENTS.map((page) => (
            <div key={page.id} className="w-full h-full flex flex-col justify-center items-center " >
              <Card href={`/designbook/${page.id}`}>
                {page.component}
              </Card>
              <p className="mt-2">{page.title}</p>
            </div>
          ))}
        </section>
      </Suspense>
    </main>
  );
}
export default Home;