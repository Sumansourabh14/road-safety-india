"use client";
import BigLinkBtn from "@/components/buttons/BigLinkBtn";
import VideoCard from "@/components/general/VideoCard";
import { Skeleton } from "@/components/ui/skeleton";
import { siteTitle } from "@/data/content/basicData";
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
    document.title = `Videos | ${siteTitle}`;
  }, []);

  return (
    <div className="py-16 px-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-[1200px] mx-auto py-10">
        <h1 className="text-5xl font-medium">Videos</h1>

        {loading ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((item, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="h-[225px] w-[300px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </section>
        ) : data.length !== 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((item) => (
              <VideoCard
                key={item.$id}
                id={item.$id}
                title={item.title}
                body={item.text}
                url={item.videoUrl}
                location={item.location}
                incidentType={item.type}
              />
            ))}
          </section>
        ) : (
          <div className="flex flex-col gap-4">
            <p>No data available</p>
            <BigLinkBtn title={"Upload Video"} url={"/upload"} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Collection;
