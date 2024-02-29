import {
  getWithToken,
  sendPostFormDataWithToken,
  sendPostWithToken,
} from './../utils/index';
import axios from 'axios';
import ProcedureModel from '../models/Procedure';
import DetailProcedureLevel2Model from '../models/DetailProcedureLevel2';

export const apiGetListProcedure = async ({page} : {page: number}): Promise<{
  status: boolean;
  data: Array<ProcedureModel>;
  url: string;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/help_articles?page=${page}&limit=${10}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListProcedureAgentByType = async ({
  type,
}: {
  type: string;
}): Promise<{
  status: boolean;
  data: { result: Array<{ id: string; name: string }> };
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/co_quan_thu_hien?type=${type}&limit=10&page=0`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListChildrentAgentByProcedureAgentId = async (
  id: string
): Promise<{
  status: boolean;
  data: { result: Array<{ id: string; name: string }> };
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/list_co_cau_to_chuc?ag_agency_id=${id}&limit=10&page=0`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListDetailProcedureLevel2 = async (
  id: string
): Promise<{
  status: boolean;
  data: any;
  staff_organ: Array<any>;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/co_cau_to_chuc_detail?organ_item_id=${id}&limit=4&page=0`;
  const { data } = await axios.get(url);
  return data ?? {};
};

// procedure slug

export const apiGetProcedureContentDesktop = async (
  id: string
): Promise<{
  status: boolean;
  data: { actual_implementation: any; diagram: any };
  comment: Array<any>;
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/articles_detail/${id}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListProcedureRelative = async (
  id: string
): Promise<{
  status: boolean;
  data: Array<any>;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/help_articles?page=0&limit=10&area_id=${id}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

// export const apiGetListProcedureComment = async (id: string) => {
//   const url = `https://thutucphapluat.com/api/Procedural_comment_controller/list_comment?procedure_id=${id}&limit=1000&page=1`;
//   const { data } = await axios.get(url);
//   return data ?? {};
// };

// Thực tế thực hiện
export const apiGetListActualImplementation = (id: string, token: string) => {
  const url = `https://thutucphapluat.com/api/Actual_Implementation_controller/list_actual_implementation_by_agency_id?ag_agency_id&help_articles_id=${id}`;
  const data = getWithToken({ url, token });
  return data ?? {};
};

// bình luận
export const apiGetListProcedureComment = (id: string, token: string) => {
  const url = `https://thutucphapluat.com/api/Procedural_comment_controller/list_comment?procedure_id=${id}&limit=1000&page=1`;
  const data = getWithToken({ url, token });

  return data ?? {};
};

export const apiProcedureComment = (args: {
  token: string;
  comment: string;
  files: string;
  id_help_articles: string;
}) => {
  const { token, comment, files, id_help_articles } = args;
  const url = `https://thutucphapluat.com/api/Procedural_comment_controller/add_procedural_comment`;
  const data = sendPostFormDataWithToken({
    url,
    token,
    data: { type: 'comment', comment, files, id_help_articles },
  });

  return data ?? {};
};
