import { createSlice } from '@reduxjs/toolkit'

export const counter = createSlice({
  name: 'counter',
  initialState: 0 as number,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  }
})
