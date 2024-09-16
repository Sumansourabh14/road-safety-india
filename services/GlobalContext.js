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

  const getVideo = async (documentId) => {
    try {
      setLoading(true);
      const res = await databases.getDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_VIDEOS_COLLECTION_ID,
        documentId
      );

      setLoading(false);
      return res;
    } catch (error) {
      // console.error(error);
      setLoading(false);
    }
  };

  const uploadVideo = async (title, body, videoUrl, location) => {
    try {
      const res = await databases.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_VIDEOS_COLLECTION_ID,
        ID.unique(),
        { title, text: body, videoUrl, location }
      );

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{ loading, getVideo, getVideos, uploadVideo }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
