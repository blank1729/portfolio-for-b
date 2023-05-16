import path from 'path';
import React from 'react'
import fs from 'fs/promises'
import Link from 'next/link';



const Blog = ({paths} : {paths : Array<string>}) => {
  return (
    <div>
        <h1>Blog</h1>
        {
            paths.map(path => <div key={path}><Link href={`/blog/${path}`}>{path}</Link></div>)
        }
    </div>
  )
}

export async function getStaticProps() {
    const postsPath = path.join(process.cwd(), 'posts');
  
    try {
      const files = await fs.readdir(postsPath);
      const fileNames = files.map((file) => path.basename(file, path.extname(file)));
      return {
        props: {
            paths : fileNames
        },
      };
    } catch (err) {
      console.error(err);
      return {
        props : {
            paths : []
        }
      }
    }
  }


export default Blog