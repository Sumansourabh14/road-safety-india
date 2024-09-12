"use client";
import { client } from "@/app/appwrite";
import { Databases, ID } from "appwrite";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const databases = new Databases(client);

  const getVideos = async () => {
    try {
      setLoading(true);
      const res = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_VIDEOS_COLLECTION_ID
      );

      setLoading(false);
      return res;
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const uploadVideo = async (body, videoUrl) => {
    try {
      const res = await databases.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_VIDEOS_COLLECTION_ID,
        ID.unique(),
        { text: body, videoUrl: videoUrl }
      );

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GlobalContext.Provider value={{ loading, getVideos, uploadVideo }}>
      {children}
    </GlobalContext.Provider>
  );
};
