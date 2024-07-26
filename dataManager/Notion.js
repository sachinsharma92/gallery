import * as SERVICEs from "@/services/Notion";

export const getPages = () => {
  return SERVICEs.getPages()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw error;
    });
};
