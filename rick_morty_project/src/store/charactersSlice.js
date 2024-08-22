import { createSlice } from '@reduxjs/toolkit'

export const characters = createSlice({
  name: 'characters',
  initialState: {
    active: 1,
    page: 1
  },
  reducers: {
    updateActive: (state, action) => {
      state.active = action.payload;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateActive, updatePage } = characters.actions

export default characters.reducer