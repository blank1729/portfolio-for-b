import React from "react";
import fs from "fs";
import path from "path";
import MarkdownIt from "markdown-it";
import Article from "@/components/Article";

type Props = {
  html: string;
  title: string;
};

const page = ({ html,title }: Props) => {
  return <Article html={html} title={title} />;
};


export async function getStaticPaths() {
  const postsPath = path.join(process.cwd(), 'posts');

  fs.readdir(postsPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
  
    const fileNames = files.map((file) => (
      {
        params : {
          slug : path.basename(file, path.extname(file)),
        }
      }
    ));
    return {
      paths: fileNames,
      fallback: false, // can also be true or 'blocking'
    };
  });
}


export async function getStaticProps(context:{params : {slug : string}}) {
  const slug = context.params.slug;

  const markdown = fs.readFileSync(
    path.join(process.cwd(), `markdown/${slug}.md`),
    'utf8'
  );
  const html = MarkdownIt().render(markdown);

  return {
    props: {
      html,
      title: slug,
    },
  };
}

export default page;
