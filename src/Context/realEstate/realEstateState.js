import React, { useReducer } from "react";
import RealEstateContext from "./realEstateContext";
import RealEstateReducer from "./realEstateReducer";
import uuid from "react-uuid";

import {
  ADD_TENANTS,
  DELETE_TENANTS,
  EDIT_TENANTS,
  GET_TENANTS,
  SET_CHOSEN_TENANT,
  SET_EDIT_TENANT,
} from "../types";

const GroupState = (props) => {
  const initialState = {
    properties: [
      {
        propertyID: "1",
        propertyName: "Alley Buildings",
        propertyAddress: "A-22, Laxman Nagar, Kunj Valley, Delhi",
      },
      {
        propertyID: "2",
        propertyName: "Krishna Buildings",
        propertyAddress: "C-2, Krishna Nagar, Chandini Chowk, Delhi",
      },
      {
        propertyID: "3",
        propertyName: "Smriti Buildings",
        propertyAddress: "B-31, Kiran Nagar, Gandhi Path, Delhi",
      },
    ],
    tenants: [
      {
        tenantID: 1,
        tenantName: "Aman Sharma",
        propertyID: "1",
      },
      {
        tenantID: 2,
        tenantName: "Karan Verma",
        propertyID: "1",
      },
      {
        tenantID: 3,
        tenantName: "Rishabh Singh",
        propertyID: "1",
      },
      {
        tenantID: 4,
        tenantName: "Aryan Gupta",
        propertyID: "2",
      },
      {
        tenantID: 5,
        tenantName: "Ashutosh Pareek",
        propertyID: "2",
      },
    ],
    currentTenants: [],
    editTenant: false,
    chosenTenant: [],
  };

  const [state, dispatch] = useReducer(RealEstateReducer, initialState);

  const getTenants = (id) => {
    dispatch({
      type: GET_TENANTS,
      payload: id,
    });
  };

  const deleteTenant = (id) => {
    dispatch({
      type: DELETE_TENANTS,
      payload: id,
    });
  };

  const setEditTenant = (edit) => {
    dispatch({
      type: SET_EDIT_TENANT,
      payload: edit,
    });
  };

  const setChosenTenant = (id) => {
    dispatch({
      type: SET_CHOSEN_TENANT,
      payload: id,
    });
  };

  const addTenant = (edit, tenant) => {
    if (edit) {
      dispatch({
        type: EDIT_TENANTS,
        payload: tenant,
      });
    } else {
      const tenantID = uuid();
      const newTenant = {
        tenantID,
        ...tenant,
      };

      dispatch({
        type: ADD_TENANTS,
        payload: newTenant,
      });
    }
  };

  return (
    <RealEstateContext.Provider
      value={{
        properties: state.properties,
        tenants: state.tenants,
        currentTenants: state.currentTenants,
        editTenant: state.editTenant,
        chosenTenant: state.chosenTenant,
        setEditTenant,
        getTenants,
        deleteTenant,
        addTenant,
        setChosenTenant,
      }}
    >
      {props.children}
    </RealEstateContext.Provider>
  );
};

export default GroupState;
