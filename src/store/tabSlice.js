import { createSlice } from "@reduxjs/toolkit";


const firstState = [
    {
        id: 1,
        title: 'Htttp',
    },
]
const tabSlice = createSlice({
    name: 'tabs',
    initialState: firstState,
    reducers: {
        addTab: (state, action) => {
            state.push(action.payload)
        },
        removeTab: (state, action) => {
            return state.filter(element => element.id !== action.payload)
        }
    },
})

export const { addTab, removeTab } = tabSlice.actions

export default tabSlice.reducer