
import api from '../lib/api';

export const postQueueNumberAdmin = async (id) => {
  const res = await api.post(`/queue/${id}`);
  return res.data;
};

export const getLatestQueue  = async() => {
  const res = await api.get(`/latest`);
  return res.data;
};

export const GetAllQueueTodayAdmin  = async() => {
  const res = await api.get(`/allQueueTodayAdmin`);
  return res.data;
};
