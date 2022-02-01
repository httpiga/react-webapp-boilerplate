import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CountState = {
  count: number
}

const initialState: CountState = {
  count: 0,
}

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.count = action.payload
    },
  },
})

const { actions, reducer } = countSlice
export const { setValue } = actions
export default reducer
