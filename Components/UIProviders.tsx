"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from 'react-hot-toast'
import { ThemeProvider as NextThemesProvider } from "next-themes";
interface PropsProvider {
  children: React.ReactNode;
}
const UIProviders = ({ children }: PropsProvider) => {
  return (
    <>
    <Toaster />
    <NextUIProvider>
      {/* <NextThemesProvider attribute="class" defaultTheme="darkmode">{children}</NextThemesProvider> */}
      {children}
    </NextUIProvider>
    </>
  );
};

export default UIProviders;
