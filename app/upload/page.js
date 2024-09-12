"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlobalContext } from "@/services/GlobalContext";
import { ID, Storage } from "appwrite";
import { useContext, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { client } from "../appwrite";

const Upload = () => {
  const [body, setBody] = useState("");
  const [file, setFile] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const { uploadVideo } = useContext(GlobalContext);

  const handleFileChange = (file) => {
    console.log(file);
    setFile(file);
  };

  const uploadVideoToAppwrite = async () => {
    const storage = new Storage(client);

    const res = await storage.createFile(
      process.env.NEXT_PUBLIC_VIDEOS_BUCKET_ID,
      ID.unique(),
      file
    );

    console.log(res);

    if (!!res) {
      const result = storage.getFileDownload(
        process.env.NEXT_PUBLIC_VIDEOS_BUCKET_ID,
        res.$id
      );
      console.log(result.href);
      setVideoUrl(result.href);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    uploadVideo(body, videoUrl);
  };

  useEffect(() => {
    if (!file) {
      return;
    }
    uploadVideoToAppwrite();
  }, [file]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-6xl">Upload Video</h1>
        <div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
              <FileUploader
                handleChange={handleFileChange}
                value={file}
                types={["mp4"]}
              />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Upload;
