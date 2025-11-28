
import api from '../../lib/api';

export const getQueueNumberAdmin = async () => {
  const res = await api.post("/queue");
  return res.data;
};