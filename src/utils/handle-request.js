import api from "../services/api";

export const fetchPosts = async (url) => {
  const response = await api.get(url);
  return response.data;
};
