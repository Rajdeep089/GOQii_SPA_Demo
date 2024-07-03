import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'XeCfoUyyT3oNsIDP-IR6UQD5TSyIG6zOPaP39ZbOEp0'; 

const initialState = {
  products: [],
  filteredProducts: [],
  currentProduct: null,
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/photos/random`, {
        params: {
          count: 20,
          client_id: ACCESS_KEY,
        },
      });
      
      return response.data.map(item => ({
        id: item.id,
        name: item.user.name,
        description: item.description || 'No description available',
        price: Math.floor(Math.random() * 100) + 1, 
        image: item.urls.regular,
        category: item.user.username,
      }));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = state.products.filter(product =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilteredProducts, setCurrentProduct } = productSlice.actions;
export default productSlice.reducer;