import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  fullName: string;
  nationalID: string;
  createdAt: string;
}

const initialState: CustomerState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName: string, nationalID: string): any {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state: CustomerState, action: PayloadAction<CustomerState>) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state: CustomerState, action: PayloadAction<string>) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// type CreateCustomerAction = {
//   type: "customer/createCustomer";
//   payload: { fullName: string; nationalID: string; createdAt: string };
// };

// type UpdateNameAction = {
//   type: "customer/updateName";
//   payload: string;
// };

// type CustomerAction = CreateCustomerAction | UpdateNameAction;

// export default function customerReducer(
//   state = initialStateCustomer,
//   action: any,
// ) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCustomer(
//   fullName: string,
//   nationalID: string,
// ): CreateCustomerAction {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName: string): UpdateNameAction {
//   return { type: "customer/updateName", payload: fullName };
// }
