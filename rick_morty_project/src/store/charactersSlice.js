import { createSlice } from '@reduxjs/toolkit'

export const characters = createSlice({
  name: 'characters',
  initialState: {
    active: 1,
    page: 1,
    pagesCount: 1,
    filter: '',
  },
  reducers: {
    updateActive: (state, action) => {
      state.active = action.payload;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
    setPagesCount: (state, action) => {
      state.pagesCount = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateActive, updatePage, setPagesCount, setFilter } = characters.actions

export default characters.reducer