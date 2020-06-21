import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const counter = createSlice({
  name: 'counter',
  initialState: 0 as number,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    multiply: {
      reducer: (state, action: PayloadAction<number>) => state * action.payload,
      prepare: (value: number) => ({ payload: value || 2 }) // fallback if the payload is a falsy value
    }
  }
})
