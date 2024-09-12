"use client";
import { GlobalContext } from "@/services/GlobalContext";
import { useContext, useEffect } from "react";

const Collection = () => {
  const { loading, getVideos } = useContext(GlobalContext);

  const listVideos = async () => {
    const res = await getVideos();
    console.log(res);
  };

  useEffect(() => {
    listVideos();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-6xl">Collection</h1>

        {loading ? <p>Loading...</p> : <p>Done</p>}
      </main>
    </div>
  );
};

export default Collection;
