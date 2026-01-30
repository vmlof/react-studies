import {
  createSlice,
  type Dispatch,
  type PayloadAction,
} from "@reduxjs/toolkit";

interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
  isLoading: boolean;
}

interface RequestLoanReturn {
  payload: { amount: number; purpose: string };
}

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state: AccountState, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state: AccountState, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount: number, purpose: string): RequestLoanReturn {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(
        state: AccountState,
        action: PayloadAction<RequestLoanReturn["payload"]>,
      ) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state: AccountState, action) {
      state.balance -= state.balance;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state: AccountState) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount: number, currency: string) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch: Dispatch, getState: any) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`,
    );

    const data = await res.json();
    const converted: number = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };
}

export default accountSlice.reducer;

// type AccountDepositWithdraw = {
//   type: "account/deposit" | "account/withdraw";
//   payload: number;
// };

// type AccountRequestLoan = {
//   type: "account/requestLoan";
//   payload: { amount: number; purpose: string };
// };

// type AccountPayLoan = {
//   type: "account/payLoan";
// };

// type AccountCurrency = {
//   type: "account/convertingCurrency";
// };

// type AccountAction =
//   | AccountDepositWithdraw
//   | AccountRequestLoan
//   | AccountPayLoan
//   | AccountCurrency;

// export default function AccountReducer(
//   state = initialStateAccount,
//   action: any,
// ) {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       // LATER
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };
//     default:
//       return state;
//   }
// }

// export function deposit(amount: number, currency: string) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch: Dispatch, getState: any) {
//     dispatch({ type: "account/convertingCurrency" });

//     const res = await fetch(
//       `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`,
//     );

//     const data = await res.json();
//     const converted: number = data.rates.USD;

//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }

// export function withdraw(amount: number) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount: number, purpose: string) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount: amount, purpose: purpose },
//   };
// }

// export function payLoan() {
//   return { type: "account/payLoan" };
// }
