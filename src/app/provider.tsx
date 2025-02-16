"use client";

import { HeroUIProvider } from "@heroui/react";
import { Provider } from "react-redux";
import store from "@/state/store";
import queryClient from "@/lib/queryClient";
import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
interface IProvidersProps{
    children: ReactNode
}
export function Providers({ children }:IProvidersProps) {
    return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <HeroUIProvider>{children}</HeroUIProvider>
        </QueryClientProvider>
      </Provider>
    );
}