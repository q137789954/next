"use client";
import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import store from "../store";
import { Provider as ReduxProvider } from "react-redux";

const Provider = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <ReduxProvider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </ReduxProvider>
  );
};

export default Provider;
