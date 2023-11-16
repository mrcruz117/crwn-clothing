import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the category item
type Category = {
  id: number;
  name: string;
  // Add other properties as needed
};

// Define a type for the state
type CategoriesState = {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    fetchCategoriesStart: (state) => {
      state.isLoading = true;
    },
    fetchCategoriesSuccess: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
