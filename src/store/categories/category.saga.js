import { takeLatest, put, all, call } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.reducer";

// import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(fetchCategoriesStart.type, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
