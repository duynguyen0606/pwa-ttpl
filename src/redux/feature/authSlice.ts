import { apiLogin, apiLogout } from '@/src/api/auth';
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isAnyOf,
} from '@reduxjs/toolkit';

export type AuthState = {
  user: any;
  token: string;
  loading: boolean;
  openModalLogin: boolean;
  openModalRegister: boolean;
  loginCode: number | null; // 0 - failed, 1 - success
};

export const authLogin = createAsyncThunk(
  'auth/login',
  async (args: { email: string; password: string }) => {
    const dataRes = await apiLogin(args);
    return dataRes.status
      ? {
          ...dataRes,
          loginCode: 1,
        }
      : {
          loginCode: 0,
        };
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (args: { token: string; data?: any; url: string }) => {
    await apiLogout(args);
  }
);

const initialState: AuthState = {
  user: null,
  token: '',
  loading: false,
  loginCode: null,
  openModalLogin: false,
  openModalRegister: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setOpenModalLogin: (state, action: PayloadAction<boolean>) => {
      state.openModalLogin = action.payload;
    },
    setOpenModalRegister: (state, action: PayloadAction<boolean>) => {
      state.openModalRegister = action.payload;
    },
    setDataUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      authLogin.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = true;
        state.user = action.payload?.data_user;
        state.loginCode = action.payload.loginCode;
        state.token = action.payload.jwt_token;
        state.loading = false;
      }
    );
    builder.addMatcher(
      isAnyOf(authLogout.fulfilled, authLogout.rejected),
      (state) => {
        (state.loading = false), (state.user = null);
      }
    );
  },
});

const authReducer = authSlice.reducer;

export const {
  setOpenModalLogin,
  setDataUser,
  setAuthLoading,
  setToken,
  setOpenModalRegister,
} = authSlice.actions;
export default authReducer;
