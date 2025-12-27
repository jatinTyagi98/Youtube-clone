import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        addToSearchCache: (state, action) => {
            //used object.assign to merge the existing state with new cache data, as RTK uses immer which only allows direct state mutation
            Object.assign(state, action.payload)
        }
    }
})

export const { addToSearchCache } = searchSlice.actions;
export default searchSlice.reducer;