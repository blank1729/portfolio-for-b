import Header from "@/components/Header";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import "../styles/globals.css";

interface AppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <div className={`min-h-screen ${isDarkMode ? "dark" : "light"}`}>
        <Header setTheme={setIsDarkMode} isDarkMode={isDarkMode} />
        <Component {...pageProps} />;
      </div>
    </AnimatePresence>
  );
};

export default MyApp;
