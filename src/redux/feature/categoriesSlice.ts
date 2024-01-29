import { apiGetListCategory } from '@/src/api/home-page';
import Category from '@/src/models/Category';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type CategoryState = {
  listCategory: Array<Category>;
};

export const getListCategory = createAsyncThunk(
  'category/getListCategory',
  async (args: { page: number }) => {
    const cateRes = await apiGetListCategory(args);
    if (cateRes.status && cateRes.data.length > 0) {
      return {
        currentPage: Number(cateRes.page),
        total: cateRes.count_record,
        data: cateRes.data,
        status: cateRes.status,
      };
    }
  }
);

const initialState: CategoryState = {
  listCategory: [],
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder.addCase(
  //       getListCategory.fulfilled,
  //       (state, action: PayloadAction<>) => {
  //         state.listCategory = action.payload;
  //       }
  //     );
  //   },
});

const categoriesReducer = categoriesSlice.reducer;

export const {} = categoriesSlice.actions;
export default categoriesReducer;
