import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the category item
type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

// Define a type for the state
type CategoryState = {
  readonly categories: CategoryItem[];
  readonly isLoading: boolean;
  readonly error: string | null;
};

// export type ActionWithPayload<T, P> = {
//   type: T;
//   payload: P;
// };

// export type ActionWithoutPayload<T> = {
//   type: T;
// };

export const CATEGORIES_INITIAL_STATE: CategoryState = {
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
    fetchCategoriesSuccess: (state, action: PayloadAction<CategoryItem[]>) => {
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
