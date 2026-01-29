import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: {
    account: AccountReducer,
    customer: customerReducer,
  },
});

export default store;
