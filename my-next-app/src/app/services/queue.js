
import api from '../lib/api';

export const getQueueNumberAdmin = async (id) => {
  const res = await api.post(`/queue/${id}`);
  return res.data;
};

export const getLatestQueue  = async() => {
  const res = await api.get(`/latest`);
  return res.data;
};