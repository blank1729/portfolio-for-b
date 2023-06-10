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
    <article className="mt-4 text-3xl">
      <motion.article
        className="prose prose-h1:text-xl prose-h2:text-lg prose-p:text-base"
        dangerouslySetInnerHTML={{ __html: html }}
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.article>
    </article>
  );
};

export default Article;
