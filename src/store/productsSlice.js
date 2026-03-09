import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com'

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const res = await axios.get(`${BASE_URL}/products`)
  return res.data
})

export const fetchByCategory = createAsyncThunk('products/fetchByCategory', async (category) => {
  const res = await axios.get(`${BASE_URL}/products/category/${category}`)
  return res.data
})

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const res = await axios.get(`${BASE_URL}/products/categories`)
  return res.data
})

const productsSlice = createSlice({
  name: 'products',
  initialState: { items: [], categories: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchByCategory.fulfilled, (state, action) => {
        state.items = action.payload
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
  }
})

export default productsSlice.reducer