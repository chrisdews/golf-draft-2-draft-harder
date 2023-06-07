"use client";

import { Provider } from "react-redux";
import { store } from "@/store";

import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

// wrap the app in this component to pass the store to the client
export default function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}

