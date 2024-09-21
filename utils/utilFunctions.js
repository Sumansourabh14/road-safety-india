import { roadIncidents } from "@/data/content/inputData";

export const getVideoType = (type) => {
  const videoType = roadIncidents.find((item) => item.value === type);
  return videoType.title;
};
