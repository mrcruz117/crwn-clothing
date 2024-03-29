// import { compose, createStore, applyMiddleware } from "redux";

import { configureStore, Middleware } from "@reduxjs/toolkit";

// import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middleWares: Middleware[] = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter(Boolean) as Middleware[];

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// redux-persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// console.log("middleWares: ", middleWares);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
