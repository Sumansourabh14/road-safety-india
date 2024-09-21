"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { siteTitle } from "@/data/content/basicData";
import { GlobalContext } from "@/services/GlobalContext";
import { getVideoType } from "@/utils/utilFunctions";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Player from "next-video/player";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const VideoDetails = () => {
  const [data, setData] = useState([]);
  const { loading, getVideo } = useContext(GlobalContext);

  const { id } = useParams();

  const listVideo = async (id) => {
    const res = await getVideo(id);

    if (!!res) {
      setData(res);
    }
  };

  useEffect(() => {
    listVideo(id);
  }, [id]);

  useEffect(() => {
    document.title = `${data.title} | ${siteTitle}`;
  }, [data]);

  return (
    <div className="py-20 px-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-start max-w-[1200px] mx-auto py-10">
        <h1 className="text-5xl font-semibold">{!!data && data.title}</h1>

        {loading ? (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[400px] w-[600px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-[350px]" />
              <Skeleton className="h-8 w-[350px]" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {!!data.location && (
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>{data.location}</p>
              </div>
            )}
            <div className="flex flex-col md:flex-row gap-6">
              {!!data.videoUrl && <Player src={data.videoUrl} />}
              <div className="max-w-[500px] flex flex-col gap-4">
                {data?.type?.length > 0 && (
                  <ToggleGroup
                    variant="outline"
                    type="multiple"
                    className="flex flex-wrap justify-start"
                    disabled
                  >
                    {data.type.map((type) => (
                      <ToggleGroupItem key={type} value={type}>
                        {getVideoType(type)}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                )}
                <p>{data.text}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default VideoDetails;
