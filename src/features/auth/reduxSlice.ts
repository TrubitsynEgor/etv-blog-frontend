import { FormData } from '@/entities'
import { IViewer, instanceAxios } from '@/shared'
import { RootState } from '@/store/store'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  async (params: FormData) => {
    const { data } = await instanceAxios.post('/auth/login', params)
    return data
  }
)

export const fetchAuthViewerCheck = createAsyncThunk(
  'auth/fetchAuthViewerCheck',
  async () => {
    const { data } = await instanceAxios.get('/auth/me')
    return data
  }
)
export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (params) => {
    const { data } = await instanceAxios.post('/auth/register', params)
    return data
  }
)

interface IAuth {
  data: null | IViewer
  status: 'loading' | 'success' | 'error'
}

const initialState: IAuth = {
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
      .addCase(fetchAuth.fulfilled, (state, actions) => {
        state.status = 'success'
        state.data = actions.payload
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = 'error'
        state.data = null
      })
      .addCase(fetchAuthViewerCheck.fulfilled, (state, actions) => {
        state.status = 'success'
        state.data = actions.payload
      })
      .addCase(fetchAuthViewerCheck.rejected, (state) => {
        state.status = 'error'
        state.data = null
      })
  },
})

export const isAuthSelector = (state: RootState) => !!state.auth.data
export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions
