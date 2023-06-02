import { IPosts, instanceAxios } from '@/shared'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await instanceAxios.get('/posts')
  return data
})
export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
  const { data } = await instanceAxios.get('/tags')
  return data
})
export const fetchRemovePost = createAsyncThunk(
  'posts/fetchRemovePost',
  async (id: string) => await instanceAxios.delete(`/posts/${id}`)
)

interface PostsState {
  posts: {
    items: IPosts[]
    status: 'loading' | 'success' | 'error'
  }
  tags: {
    items: string[]
    status: 'loading' | 'success' | 'error'
  }
}

const initialState: PostsState = {
  posts: {
    items: [],
    status: 'loading',
  },
  tags: {
    items: [],
    status: 'loading',
  },
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.posts.items = []
        state.posts.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts.items = action.payload
        state.posts.status = 'success'
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.posts.items = []
        state.posts.status = 'error'
      })
      .addCase(fetchTags.pending, (state) => {
        state.tags.items = []
        state.tags.status = 'loading'
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags.items = action.payload
        state.tags.status = 'success'
      })
      .addCase(fetchTags.rejected, (state) => {
        state.tags.items = []
        state.tags.status = 'error'
      })
      .addCase(fetchRemovePost.fulfilled, (state, action) => {
        state.posts.items = state.posts.items.filter(
          (item) => item._id !== action.meta.arg
        )
      })
  },
})

export const postsReducer = postsSlice.reducer
