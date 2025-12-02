import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    accessToken: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    accessToken: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
            state.isAuthenticated = true;
        },
        clearToken: (state) => {
            state.accessToken = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setAccessToken, clearToken } = authSlice.actions;

export const isAuthenticatedSelector = (state: RootState) => state.auth.isAuthenticated;
export const accessTokenSelector = (state: RootState) => state.auth.accessToken;

export default authSlice.reducer;
