import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'global',
  initialState: {
    id: null,
    islogin: false,
  },
  reducers: {
    update: (state, actions) => {
        console.log('进来了')
        const { payload } = actions;
        console.log(payload)

        return {
            ...state
        }
    }
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { update } = counterSlice.actions

export default counterSlice.reducer