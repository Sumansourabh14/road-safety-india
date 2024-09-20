"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { siteTitle } from "@/data/content/basicData";
import { roadIncidents } from "@/data/content/inputData";
import { GlobalContext } from "@/services/GlobalContext";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const getVideoType = (type) => {
    const videoType = roadIncidents.find((item) => item.value === type);
    return videoType.title;
  };

  useEffect(() => {
    listVideo(id);
  }, [id]);

  useEffect(() => {
    document.title = `${data.title} | ${siteTitle}`;
  }, [data]);

  return (
    <div className="py-16 px-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-[1200px] mx-auto py-10">
        <h1 className="text-5xl font-medium">{!!data && data.title}</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="max-w-[800px] flex flex-col gap-4">
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
            {!!data.location && (
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>{data.location}</p>
              </div>
            )}
            <div className="max-w-[700px] flex flex-col gap-6">
              {!!data.videoUrl && (
                <video preload="auto" controls className="rounded-sm">
                  <source src={data.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p>{data.text}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default VideoDetails;
