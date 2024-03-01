import { apiLogin, apiLogout } from '@/src/api/auth';
import { apiGetListNotification } from '@/src/api/home-page';
import { apiGetListMyPost, apiGetMyFollowerByType } from '@/src/api/user';
import ArticleModel from '@/src/models/Article';
import PostModel from '@/src/models/Post';
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isAnyOf,
} from '@reduxjs/toolkit';

export type UserState = {
  listNotification: Array<any>;
  listMyPost: Array<ArticleModel>;
  listFollower: Array<any>;
  listWatching: Array<any>;
};

const initialState: UserState = {
  listNotification: [],
  listMyPost: [],
  listFollower: [],
  listWatching: [],
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

export const getListMyPost = createAsyncThunk(
  'user/getListMyPost',
  async (args: { token: string }) => {
    const res = await apiGetListMyPost(args);
    if (res.status) {
      return res.data;
    }
  }
);

export const getListFollower = createAsyncThunk(
  'user/getListFollower',
  async (args: { token: string }) => {
    const res = await apiGetMyFollowerByType({
      type: 'follower',
      token: args.token,
    });
    if (res.status) {
      return res.data;
    }
  }
);

export const getListWatching = createAsyncThunk(
  'user/getListWatching',
  async (args: { token: string }) => {
    const res = await apiGetMyFollowerByType({
      type: 'watching',
      token: args.token,
    });
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
    builder
      .addCase(
        getListNotification.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.listNotification = action.payload;
        }
      )
      .addCase(getListMyPost.fulfilled, (state, action: PayloadAction<any>) => {
        state.listMyPost = action.payload;
      })
      .addCase(
        getListFollower.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.listFollower = action.payload;
        }
      )
      .addCase(
        getListWatching.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.listWatching = action.payload;
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
