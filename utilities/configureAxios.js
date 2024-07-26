import axios from "axios";

let apiUrl = process.env.NEXT_PUBLIC_NOTION_API_BASE_URL;

const configureAxios = () =>
  axios.create({
    baseURL: apiUrl,
    timeout: 30000,
  });

export const axiosInstance = configureAxios();

axiosInstance.defaults.headers.common["Content-Type"] =
  "application/json;charset=utf-8";

axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.NEXT_PUBLIC_NOTION_SECRET}`;

axiosInstance.defaults.headers.common["Notion-Version"] = "2022-06-28";

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!(error && error.response)) {
      error = {
        response: {
          data: {
            errors: {
              message: "Something went wrong.",
            },
          },
        },
      };
    }
    return Promise.reject(error);
  }
);
