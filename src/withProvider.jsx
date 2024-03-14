import React, { useContext } from "react";
import { CartContext } from "./Context";


const withProvider = (provider) => (IncomingComponent) => (props) => {
  const contextData = useContext(provider);
  return <IncomingComponent {...props} {...contextData} />;
};

export default withProvider;
export const withCart = withProvider(CartContext);