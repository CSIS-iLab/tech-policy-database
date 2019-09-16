import React, { useState } from "react";
import ShopContext from "./shop-context";

const GlobalState = props => {
  return (
    <ShopContext.Provider
      value={
        {
          // state goes here
        }
      }
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
