import axios from "axios";

const apiBaseUrl = "http://localhost:9000/api";

export const categories = async () => {
  const url = `${apiBaseUrl}/categories`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const articles = async (id) => {
  const url = `${apiBaseUrl}/category/${id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const author = async (id) => {
  const url = `${apiBaseUrl}/author/${id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
