"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

type ArticleType = {
  title: string;
  html: string;
};

const Article = ({ html }: { html: string }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="container mx-auto py-8">
        <motion.article
          className="prose pt-6 max-w-3xl mx-auto text-lg"
          dangerouslySetInnerHTML={{ __html: html }}
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        ></motion.article>
      </div>
    </>
  );
};

export default Article;
