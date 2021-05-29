import {
  ADD_TENANTS,
  DELETE_TENANTS,
  EDIT_TENANTS,
  GET_TENANTS,
  SET_CHOSEN_TENANT,
  SET_EDIT_TENANT,
} from "../types";

const realEstateReducer = (state, action) => {
  switch (action.type) {
    case GET_TENANTS:
      return {
        ...state,
        currentTenants: state.tenants.filter(
          (tenant) => tenant.propertyID === action.payload
        ),
      };
    case DELETE_TENANTS:
      return {
        ...state,
        currentTenants: state.tenants.filter(
          (tenant) => tenant.tenantID !== action.payload
        ),
        tenants: state.tenants.filter(
          (tenant) => tenant.tenantID !== action.payload
        ),
      };
    case SET_EDIT_TENANT:
      return {
        ...state,
        editTenant: action.payload,
      };
    case SET_CHOSEN_TENANT:
      return {
        ...state,
        chosenTenant: state.tenants.filter(
          (tenant) => tenant.tenantID === action.payload
        ),
      };
    case EDIT_TENANTS:
      return {
        ...state,
        tenants: state.tenants.map((tenant) =>
          tenant.tenantID === action.payload.tenantID ? action.payload : tenant
        ),
      };
    case ADD_TENANTS:
      return {
        ...state,
        tenants: [...state.tenants, action.payload],
      };

    default:
      return state;
  }
};

export default realEstateReducer;
