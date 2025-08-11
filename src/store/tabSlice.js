import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
    name: 'tabSlice',
    initialState: {
        value: [
            {
                id: 1,
                title: 'Htttp',
            },
        ],
    },
    reducers: {
        addTab: (state,action) => {
            state.value.push(action.payload)
        },
        removeTab: (state,action) => {
            return state.filter(element => element.id !== action.payload)
        }
    },
})

export const {addTab,removeTab} = tabSlice.actions

export default tabSlice.reducer