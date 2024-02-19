import { apiLogin } from '@/src/api/auth';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type AuthState = {
  user: any;
  token: string | null;
  loading: boolean;
  openModalLogin: boolean;
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

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  loginCode: null,
  openModalLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setOpenModalLogin: (state, action: PayloadAction<boolean>) => {
      state.openModalLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      authLogin.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = true;
        state.user = action.payload?.data_user;
        state.loading = false;
        state.loginCode = action.payload.loginCode;
      }
    );
  },
});

const authReducer = authSlice.reducer;

export const { setOpenModalLogin } = authSlice.actions;
export default authReducer;
