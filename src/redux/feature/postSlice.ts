import {
  apiGetListCategory,
  apiGetListMostViewArticle,
} from '@/src/api/home-page';
import ArticleModel from '@/src/models/Article';
import Category from '@/src/models/Category';
import PostModel from '@/src/models/Post';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type CategoryState = {
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

const initialState: CategoryState = {
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
  },
  extraReducers: (builder) => {
    builder.addCase(
      getListArticle.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.listArticle = action.payload;
      }
    );
  },
});

const postReducer = postSlice.reducer;

export const { setListPost } = postSlice.actions;
export default postReducer;
