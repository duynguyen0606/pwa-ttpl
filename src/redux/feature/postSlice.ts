import {
  apiGetListCategory,
  apiGetListMostViewArticle,
  apiGetListPost,
} from '@/src/api/home-page';
import ArticleModel from '@/src/models/Article';
import Category from '@/src/models/Category';
import PostModel from '@/src/models/Post';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type postState = {
  listArticle: Array<ArticleModel | any>;
  listPost: Array<ArticleModel>;
};

export const getListArticle = createAsyncThunk(
  'post/getListArticle',
  async () => {
    const dataRes = await apiGetListMostViewArticle();
    if (dataRes.status && dataRes.data.length > 0) {
      return dataRes.data ?? [];
    }
  }
);

export const getListPost = createAsyncThunk('post/getListPost', async () => {
  const dataRes = await apiGetListPost({ page: 1 });
  if (dataRes.status) {
    return dataRes.data ?? [];
  }
});

const initialState: postState = {
  listArticle: [],
  listPost: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setListPost: (state, action) => {
      state.listPost = action.payload;
    },
    setListArticle: (state, action) => {
      state.listArticle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListPost.fulfilled, (state, action: PayloadAction<any>) => {
        state.listPost = action.payload;
      })
      .addCase(
        getListArticle.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.listArticle = action.payload;
        }
      );
  },
});

const postReducer = postSlice.reducer;

export const { setListPost, setListArticle } = postSlice.actions;
export default postReducer;
