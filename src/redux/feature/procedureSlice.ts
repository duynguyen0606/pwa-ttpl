import { apiGetUserProcedureByType } from "@/src/api/user";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type procedureState = {
    listProcedureSaved: Array<any>;
    listProcedureEdited: Array<any>;
    listProcedureWatched: Array<any>;
};

export const getListProcedureSaved = createAsyncThunk(
    "procedure/getListProcedureSaved",
    async (args: { token: string }) => {
        const dataRes = await apiGetUserProcedureByType({
            type: "save",
            token: args.token,
        });
        if (dataRes.status) return dataRes.data ?? [];
    }
);

export const getListProcedureEdited = createAsyncThunk(
    "procedure/getListProcedureEdited",
    async (args: { token: string }) => {
        const dataRes = await apiGetUserProcedureByType({
            type: "edit",
            token: args.token,
        });
        if (dataRes.status) return dataRes.data ?? [];
    }
);

export const getListProcedureWatched = createAsyncThunk(
    "procedure/getListProcedureWatched",
    async (args: { token: string }) => {
        const dataRes = await apiGetUserProcedureByType({
            type: "",
            token: args.token,
        });
        if (dataRes.status) return dataRes.data ?? [];
    }
);

const initialState: procedureState = {
    listProcedureSaved: [],
    listProcedureEdited: [],
    listProcedureWatched: [],
};

const procedureSlice = createSlice({
    name: "procedure",
    initialState,
    reducers: {
        setListProcedureSaved: (state, action) => {
            state.listProcedureSaved = action.payload;
        },
        setListProcedureEdited: (state, action) => {
            state.listProcedureEdited = action.payload;
        },
        setListProcedureWatched: (state, action) => {
            state.listProcedureWatched = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                getListProcedureSaved.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.listProcedureSaved = action.payload;
                }
            )
            .addCase(
                getListProcedureEdited.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.listProcedureEdited = action.payload;
                }
            )
            .addCase(
                getListProcedureWatched.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.listProcedureWatched = action.payload;
                }
            );
    },
});

const procedureReducer = procedureSlice.reducer;

export const {
    setListProcedureSaved,
    setListProcedureEdited,
    setListProcedureWatched,
} = procedureSlice.actions;
export default procedureReducer;
