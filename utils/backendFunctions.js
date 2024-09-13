import { client } from "@/app/appwrite";
import { ID, Storage } from "appwrite";

export const uploadVideoToBackend = async (file) => {
  try {
    const storage = new Storage(client);

    const res = await storage.createFile(
      process.env.NEXT_PUBLIC_VIDEOS_BUCKET_ID,
      ID.unique(),
      file
    );

    if (!!res) {
      const result = storage.getFileDownload(
        process.env.NEXT_PUBLIC_VIDEOS_BUCKET_ID,
        res.$id
      );
      return result.href;
    }
  } catch (error) {
    console.error(error);
  }
};
