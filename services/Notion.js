import { axiosInstance } from "@/utilities/configureAxios";
import * as APIs from "@/constants/BackendConstant";
import * as ApiResponse from "@/constants/ApiResponse";

export const getPages = () => {
  const body = {
    filter: {
      property: "Status",
      status: {
        equals: "Done",
      },
    },
  };
  let url = APIs.GET_PAGES.replace(
    ":database_id",
    process.env.NEXT_PUBLIC_NOTION_DATABASE_ID
  );
  // return Promise.resolve(ApiResponse.get_pages);
  return axiosInstance.post(url, body);
};
