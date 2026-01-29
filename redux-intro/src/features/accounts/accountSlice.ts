import type { Dispatch } from "redux";

interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
  isLoading: boolean;
}

const initialStateAccount: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

type AccountDepositWithdraw = {
  type: "account/deposit" | "account/withdraw";
  payload: number;
};

type AccountRequestLoan = {
  type: "account/requestLoan";
  payload: { amount: number; purpose: string };
};

type AccountPayLoan = {
  type: "account/payLoan";
};

type AccountCurrency = {
  type: "account/convertingCurrency";
};

type AccountAction =
  | AccountDepositWithdraw
  | AccountRequestLoan
  | AccountPayLoan
  | AccountCurrency;

export default function AccountReducer(
  state = initialStateAccount,
  action: AccountAction,
) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      // LATER
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "account/convertingCurrency":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

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

export function withdraw(amount: number) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount: number, purpose: string) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}

export function payLoan() {
  return { type: "account/payLoan" };
}
