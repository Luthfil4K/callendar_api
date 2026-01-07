import api from "../lib/api";

const getQueueNumberUser = async (id) => {
  const res = await api.get(`/status/${id}`);
  return res.data;
};

export const getLastQueue = async (id) => {
  const res = await api.get(`/status/${id}`);
  return res.data;
};

export const updateStatusByAdmin = async ({ id, type }) => {
  return api.patch(`/admin/changeStatus/${id}`, {
    type
  });
}


export default getQueueNumberUser;
