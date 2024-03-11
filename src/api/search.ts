import axios from 'axios';

export const apiSearchGlobal = async ({
  limit = 10,
  page = 0,
  search_procedure,
}: {
  limit?: number;
  page?: number;
  search_procedure: string;
}) => {
  const url = `https://thutucphapluat.com/api/Posts_controller/searchAll`;
  const { data } = await axios.get(url, {
    params: {
      limit,
      page,
      search_procedure,
    },
  });
  return data ?? {};
};
