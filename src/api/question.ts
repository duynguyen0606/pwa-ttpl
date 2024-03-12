import axios from 'axios';

export const apiGetListFAQ = async ({
  page = 1,
}: {
  page: number;
}): Promise<{
  status: boolean;
  data: Array<any>;
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Faq_controller/list?limit=10&page=${page}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListArea = async (): Promise<{
  status: boolean;
  data: Array<any>;
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Administrative_field_controller/list_area`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListField = async (): Promise<{
  status: boolean;
  data: Array<any>;
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Administrative_field_controller/read`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListUserQuestion = async ({
  page = 0,
}: {
  page: number;
}) => {
  const url = `https://thutucphapluat.com/api/Question_controller/list?limit=10&page=${page}&type=user`;
  const { data } = await axios.get(url);
  return data ?? {};
};
