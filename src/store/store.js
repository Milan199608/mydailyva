import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {logger} from "redux-logger";

import {reducer} from "./";

/**
 * creates redux store with desired middleware based on env
 * @return {object} redux store
 */
const createCustomStore = () => {
  // const middleware = process.env.ENV !== 'prod' ? [logger] : [];
  const middleware = [logger];
  return configureStore({
    reducer,
    middleware: [
      // default middleware includes thunk and promise support
      ...getDefaultMiddleware({immutableCheck: false, serializableCheck: false})
      // ...middleware
    ]
  });
};

// const configureResources = store => {
//   console.log(store)
// };

const initializeStore = () => {
  const store = createCustomStore();
  // configureResources(store);
  return store;
};

export default initializeStore;