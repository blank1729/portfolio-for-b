'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react'

type ArticleType = {
    title :string
    html : string
}

const Article = ({title, html} : ArticleType) => {
    const pathname = usePathname();
  return (

    <AnimatePresence mode='wait'>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
      <h1>{title}</h1>
      <article dangerouslySetInnerHTML={{__html: html}}></article>
        
      </motion.div>
    </AnimatePresence>
  )
}

export default Article