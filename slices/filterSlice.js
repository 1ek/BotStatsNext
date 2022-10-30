import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedServer: {
        value: 'ALL', label: 'ALL SERVERS'
    },
    selectedSort: { value: 'hightolow', label: 'High to low' },
    searchInput: ''
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        selectServer: (state, action) => {
            state.selectedServer = action.payload
        },
        selectSort: (state, action) => {
            state.selectedSort = action.payload
        },
        searchValueChange: (state, action) => {
            state.searchInput = action.payload
        }
    }
})

const { actions, reducer } = filterSlice

export default reducer

export const {
    selectServer, selectSort, searchValueChange
} = actions