import { combineReducers, createStore } from "redux";
import AccountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
// createStore only for learnig purposes, it's deprecated currently

const rootReducer = combineReducers({
  account: AccountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
