"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { roadIncidents } from "@/data/content/inputData";
import { GlobalContext } from "@/services/GlobalContext";
import { uploadVideoToBackend } from "@/utils/backendFunctions";
import { useContext, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState("");
  const [location, setLocation] = useState("");
  const [incidentType, setIncidentType] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoSrc, setVideoSrc] = useState("");

  const { uploadVideo } = useContext(GlobalContext);

  const handleFileChange = (file) => {
    const url = URL.createObjectURL(file);
    setVideoSrc(url);
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    uploadVideo(title, body, videoUrl, location, incidentType);
  };

  const uploadVideoToAppwrite = async () => {
    const url = await uploadVideoToBackend(file);
    setVideoUrl(url);
  };

  useEffect(() => {
    if (!file) {
      return;
    }

    uploadVideoToAppwrite();
  }, [file]);

  return (
    <div className="p:8 md:p-24 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1 className="text-5xl text-center font-bold">Upload Video</h1>
        <div className="my-4 px-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8 max-w-[680px] items-center mx-auto">
              <Input
                type="text"
                placeholder="Title of the video"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <div>
                <Textarea
                  placeholder="Type your body here"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                />
                <p className="text-sm text-muted-foreground mt-1">
                  This will be used for additional context or any crucial
                  information, basically anything that describes the activity
                  happening in the video.
                </p>
              </div>
              <FileUploader
                handleChange={handleFileChange}
                value={file}
                types={["mp4"]}
              >
                <div className="w-full max-w-lg p-6 border-2 border-dashed rounded-lg transition-colors border-gray-300">
                  {!videoSrc ? (
                    <div className="text-center text-gray-500">
                      <p className="text-md">
                        Drop or upload a video file here
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <video
                        className="w-full h-auto mt-4 rounded-lg"
                        controls
                        src={videoSrc}
                      />
                    </div>
                  )}
                </div>
              </FileUploader>

              {!!file && (
                <div className="flex flex-col gap-4 items-center">
                  <Input
                    type="text"
                    placeholder="Location in the video"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <p className="text-black text-md">Type of incident</p>
                  <p className="text-sm text-muted-foreground mt-[-10px]">
                    You can select more than one
                  </p>
                  <ToggleGroup
                    variant="outline"
                    type="multiple"
                    className="flex flex-wrap"
                    value={incidentType}
                    onValueChange={(value) => {
                      setIncidentType(value);
                    }}
                  >
                    {roadIncidents.map((type) => (
                      <ToggleGroupItem key={type.value} value={type.value}>
                        {type.title}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>
              )}
              <Button type="submit" disabled={!videoSrc || title.length === 0}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Upload;
