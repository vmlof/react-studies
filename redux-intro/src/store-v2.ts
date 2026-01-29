import { applyMiddleware, combineReducers, type UnknownAction } from "redux";
import AccountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { thunk, type ThunkMiddleware } from "redux-thunk";
import { legacy_createStore as createStore } from "redux";
// createStore only for learnig purposes, it's deprecated currently

const rootReducer = combineReducers({
  account: AccountReducer,
  customer: customerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppAction = UnknownAction;

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk as ThunkMiddleware<RootState, AppAction>),
);

export type AppDispatch = typeof store.dispatch;

export default store;
