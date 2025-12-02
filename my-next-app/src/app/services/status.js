import api from "../lib/api";

const getQueueNumberUser = async (id) => {
  const res = await api.get(`/status/${id}`);
  return res.data;
};

export const getLastQueue = async (id) => {
  const res = await api.get(`/status/${id}`);
  return res.data;
};


export default getQueueNumberUser;
