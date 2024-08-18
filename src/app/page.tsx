import React, { Suspense } from "react";
import Card from "./components/Card";
import Loading from "./designbook/[id]/loading";
import { PAGE_CONTENTS } from "./components/constants/contents";

const Home = () => {
  return (
      <Suspense fallback={<Loading />}>
        <section className="h-full">
          <div className="flex justify-center items-center h-[160px] py-10">
            hello world
          </div>
          <div className="mx-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 min-[2000px]:grid-cols-5 gap-5 justify-items-center items-center">
            {PAGE_CONTENTS.map((page, i) => (
              <div key={i} className="h-full flex flex-col justify-center items-center " >
                <Card href={`/designbook/${page.id}`}>
                  {page.component}
                </Card>
                <p className="mt-2">{page.title}</p>
              </div>
            ))}
          </div>
        </section>
      </Suspense>
  );
}
export default Home;