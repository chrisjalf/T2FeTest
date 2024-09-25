import axios from "axios";

const apiBaseUrl = "http://localhost:9000/api";

export const categories = () => {
  const url = `${apiBaseUrl}/categories`;
  return axios
    .get(url)
    .then((response) => response.data)
    .catch(() => []);
};
