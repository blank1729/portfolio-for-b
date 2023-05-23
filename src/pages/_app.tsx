import Header from "@/components/Header";
import { AnimatePresence } from "framer-motion";
import React from "react";
import "../styles/globals.css";

interface AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimatePresence mode="wait">
      <Header />
      <Component {...pageProps} />;
    </AnimatePresence>
  );
};

export default MyApp;
