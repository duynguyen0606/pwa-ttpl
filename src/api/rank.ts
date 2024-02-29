import { Post } from '@/src/components/common';
import axios from 'axios';
import ArticleModel from '../models/Article';
import PostModel from '../models/Post';
import RankProcedureModel from '../models/RankProcedure';
import RankAnswer from '../models/RankAnswer';
import User from '../models/User';
import BussinessModel from '../models/Business';

export const apiGetListRankPost = async ({
  page = 0,
}: {
  page: number;
}): Promise<{
  status: boolean;
  page: number;
  data: {
    result: Array<PostModel>;
    found_rows: number;
  };
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Rank_controller/rank_post?limit=10&page=${page}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListRankProcedure = async ({
  page = 0,
}: {
  page: number;
}): Promise<{
  status: boolean;
  page: number;
  data: {
    result: Array<RankProcedureModel>;
    found_rows: number;
  };
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Rank_controller/legalProceedings?limit=10&page=${page}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListRankQA = async ({
  page = 0,
}: {
  page: number;
}): Promise<{
  status: boolean;
  page: number;
  data: {
    result: Array<RankAnswer>;
    found_rows: number;
  };
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Rank_controller/legalAnswer?limit=10&offset=${page}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListRankLawyer = async ({
  page = 0,
}: {
  page: number;
}): Promise<{
  status: boolean;
  page: number;
  data: {
    result: Array<User>;
    found_rows: number;
  };
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Rank_controller/lawyer?limit=10&page=${page}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListRankStaff = async ({
  page = 0,
}: {
  page: number;
}): Promise<{
  status: boolean;
  page: number;
  data: {
    result: Array<User>;
    found_rows: number;
  };
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Rank_controller/staff?limit=10&page=${page}`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListRankBussiness = async ({
  page = 0,
}: {
  page: number;
}): Promise<{
  status: boolean;
  data: {
    result: Array<BussinessModel>;
    found_rows: number;
  };
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Rank_controller/enterprise?limit=10&page=0`;
  const { data } = await axios.get(url);
  return data ?? {};
};

export const apiGetListRankCompany = async ({
  page = 0,
}: {
  page: number;
}): Promise<{
  status: boolean;
  data: {
    result: Array<BussinessModel>;
    found_rows: number;
  };
  msg: string;
}> => {
  const url = `https://thutucphapluat.com/api/Rank_controller/company?limit=10&page=0`;
  const { data } = await axios.get(url);
  return data ?? {};
};
