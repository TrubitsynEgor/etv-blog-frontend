import { IViewer, instanceAxios } from '@/shared'
import {
  createSlice,
  createAsyncThunk,
  Action,
  AnyAction,
} from '@reduxjs/toolkit'

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
  const { data } = await instanceAxios.get('/auth/me')
  return data
})

// export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
//   return fetchMe()
// })
// export const fetchRegister = createAsyncThunk(
//   'auth/fetchRegister',
//   async (params) => {
//     return fetchReg(params)
//   }
// )

interface IAuthState {
  data: IViewer | null
  status: 'loading' | 'success' | 'error'
}

const initialState: IAuthState = {
  data: null,
  status: 'loading',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.data = null
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.fulfilled, (state: IAuthState, action: AnyAction) => {
        state.data = action.payload
        state.status = 'success'
      })
      .addCase(fetchAuth.rejected, (state: IAuthState) => {
        state.data = null
        state.status = 'error'
      })
  },
  // [fetchAuth.pending]: (state) => {
  //   state.status = 'loading'
  //   state.data = null
  // },
  // [fetchAuth.fulfilled]: (state, action) => {
  //   state.status = 'success'
  //   state.data = action.payload
  // },
  // [fetchAuth.rejected]: (state) => {
  //   state.status = 'error'
  //   state.data = null
  // },
  // [fetchAuthMe.pending]: (state) => {
  //   state.status = 'loading'
  //   state.data = null
  // },
  // [fetchAuthMe.fulfilled]: (state, action) => {
  //   state.status = 'success'
  //   state.data = action.payload
  // },
  // [fetchAuthMe.rejected]: (state) => {
  //   state.status = 'error'
  //   state.data = null
  // },
  // [fetchRegister.pending]: (state) => {
  //   state.status = 'loading'
  //   state.data = null
  // },
  // [fetchRegister.fulfilled]: (state, action) => {
  //   state.status = 'success'
  //   state.data = action.payload
  // },
  // [fetchRegister.rejected]: (state) => {
  //   state.status = 'error'
  //   state.data = null
  // },
})

export const isAuthSelector = (state) => !!state.auth.data
export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions
