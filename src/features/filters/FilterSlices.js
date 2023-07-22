import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tag: [],
    search: '',
    sort: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        productTag: (state, action) => {
            state.tag = action.payload;
        },
        searchParam: (state, action) => {
            state.search = action.payload;
        },
        sortType: (state, action) => {
            state.sort = action.payload
        }
    }
})

export default filterSlice.reducer;
export const { searchParam, productTag, sortType } = filterSlice.actions