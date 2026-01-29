import { connect } from "react-redux";
import type { RootState } from "../../store";

type BalanceDisplayProps = {
  balance: number;
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }: BalanceDisplayProps) {
  return <div className="balance">{formatCurrency(Number(balance))}</div>;
}

function mapStateToProps(state: RootState) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
