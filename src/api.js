import axios from "axios";

const apiBaseUrl = "http://localhost:9000/api";

export const categories = async () => {
  const url = `${apiBaseUrl}/categories`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch {
    return [];
  }
};
