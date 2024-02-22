import axios from 'axios';
import ProcedureModel from '../models/Procedure';
import DetailProcedureLevel2Model from '../models/DetailProcedureLevel2';

export const apiGetListProcedure = async (): Promise<{
  status: boolean;
  data: Array<ProcedureModel>;
  url: string;
}> => {
  const url = `https://thutucphapluat.com/api/Posts_controller/help_articles?page=0&limit=${10}`;
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

export const apiGetListProcedureComment = async (id: string) => {
  const url = `https://thutucphapluat.com/api/Procedural_comment_controller/list_comment?procedure_id=${id}&limit=1000&page=1`;
  const { data } = await axios.get(url);
  return data ?? {};
};
