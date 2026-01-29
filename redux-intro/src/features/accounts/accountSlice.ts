interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initialStateAccount: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
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

type AccountAction =
  | AccountDepositWithdraw
  | AccountRequestLoan
  | AccountPayLoan;

export default function AccountReducer(
  state = initialStateAccount,
  action: AccountAction,
) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
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
    default:
      return state;
  }
}

export function deposit(amount: number) {
  return { type: "account/deposit", payload: amount };
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
