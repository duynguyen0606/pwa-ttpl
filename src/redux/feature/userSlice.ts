import { apiLogin, apiLogout } from '@/src/api/auth';
import { apiGetListNotification } from '@/src/api/home-page';
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isAnyOf,
} from '@reduxjs/toolkit';

export type UserState = {
  listNotification: Array<any>;
};

const initialState: UserState = {
  listNotification: [],
};

export const getListNotification = createAsyncThunk(
  'user/getListNotification',
  async (args: { token: string }) => {
    const res = await apiGetListNotification(args);
    if (res.status) {
      return res.data;
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getListNotification.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.listNotification = action.payload;
      }
    );
    // builder.addMatcher(
    //   isAnyOf(authLogout.fulfilled, authLogout.rejected),
    //   (state) => {
    //     (state.loading = false), (state.user = null);
    //   }
    // );
  },
});

const userReducer = userSlice.reducer;

export const {} = userSlice.actions;
export default userReducer;
