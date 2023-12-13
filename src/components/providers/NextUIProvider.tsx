"use client";

import { NextUIProvider as Provider } from "@nextui-org/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const NextUIProvider = ({ children }: Props) => <Provider>{children}</Provider>;

export default NextUIProvider;
