interface CustomerState {
  fullName: string;
  nationalID: string;
  createdAt: string;
}

const initialStateCustomer: CustomerState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

type CreateCustomerAction = {
  type: "customer/createCustomer";
  payload: { fullName: string; nationalID: string; createdAt: string };
};

type UpdateNameAction = {
  type: "customer/updateName";
  payload: string;
};

type CustomerAction = CreateCustomerAction | UpdateNameAction;

export default function customerReducer(
  state = initialStateCustomer,
  action: CustomerAction,
) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

export function createCustomer(
  fullName: string,
  nationalID: string,
): CreateCustomerAction {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName: string): UpdateNameAction {
  return { type: "customer/updateName", payload: fullName };
}
