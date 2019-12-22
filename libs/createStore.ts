import {
  applyMiddleware,
  compose,
  createStore as CreateReduxStore,
  Reducer
} from "redux";
// types
import { IStore } from "types/store";

interface IWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
}

const createStore = (
  makeRootReducer: Reducer<IStore, any>,
  enhancers: any[] = []
) => (initialState = {}) => {
  // Middleware Configuration
  const middleware: any[] = [];

  // Store Enhancers
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
    const extendedWindow = window as IWindow;

    if (
      typeof extendedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function"
    ) {
      composeEnhancers = extendedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  return CreateReduxStore(
    makeRootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );
};

export default createStore;
