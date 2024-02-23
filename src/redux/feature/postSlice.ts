import {
  apiGetListCategory,
  apiGetListMostViewArticle,
} from '@/src/api/home-page';
import ArticleModel from '@/src/models/Article';
import Category from '@/src/models/Category';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type CategoryState = {
  listArticle: Array<ArticleModel | any>;
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
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
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

export const {} = postSlice.actions;
export default postReducer;
