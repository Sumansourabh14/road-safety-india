"use client";
import VideoCard from "@/components/general/VideoCard";
import { GlobalContext } from "@/services/GlobalContext";
import { useContext, useEffect, useState } from "react";

const Collection = () => {
  const [data, setData] = useState([]);
  const { loading, getVideos } = useContext(GlobalContext);

  const listVideos = async () => {
    const res = await getVideos();

    if (!!res) {
      setData(res.documents);
    }
  };

  useEffect(() => {
    listVideos();
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-6xl">Collection</h1>

        {loading ? (
          <p>Loading...</p>
        ) : data.length !== 0 ? (
          data.map((item) => (
            <VideoCard
              key={item.$id}
              id={item.$id}
              body={item.text}
              url={item.videoUrl}
            />
          ))
        ) : (
          <p>No data available</p>
        )}
      </main>
    </div>
  );
};

export default Collection;
