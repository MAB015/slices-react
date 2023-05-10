import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang : 'en',
    theme : 'dark'
}

const settingSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setLang(state, action) {
            state.lang = action.payload
        },
        setTheme(state, action) {
            state.theme = action.payload
        }
    }
})

export const { setLang, setTheme } = settingSlice.actions
export default settingSlice.reducer