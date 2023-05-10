import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    id: null,
    email: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action){
            state.id = action.payload.id
            state.email = action.payload.email
            state.token = action.payload.token
        },
        logout(state, action){
            state.id = null
            state.email = null
            state.token = null
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer