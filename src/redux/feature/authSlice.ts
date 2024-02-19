import { apiLogin } from '@/src/api/auth';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type AuthState = {
  user: any;
  token: string | null;
  loading: boolean;
};

export const authLogin = createAsyncThunk(
  'auth/login',
  async (args: { email: string; password: string }) => {
    const dataRes = await apiLogin(args);
    return dataRes.status ? dataRes : {};
  }
);

const initialState: AuthState = {
  user: null,
  token: null,
  loading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      authLogin.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.user = action.payload?.data_user;
        state.loading = false;
      }
    );
  },
});

const authReducer = authSlice.reducer;

export const {} = authSlice.actions;
export default authReducer;
