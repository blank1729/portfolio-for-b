import React from "react";
import fsSync from "fs";
import fs from "fs/promises";
import path from "path";
import MarkdownIt from "markdown-it";
import Article from "@/components/Article";
import Header from "@/components/Header";

type Props = {
  html: string;
  title: string;
};

const page = ({ html, title }: Props) => {
  return (
    <>
      <main className="px-6 md:max-w-3xl md:mx-auto pt-8">
        <h1 className="text-4xl font-semibold uppercase">{title}</h1>
        <Article html={html} />;
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const postsPath = path.join(process.cwd(), "posts");

  try {
    const files = await fs.readdir(postsPath);
    const fileNames = files.map((file) => ({
      params: {
        slug: path.basename(file, path.extname(file)),
      },
    }));
    return {
      paths: fileNames,
      fallback: false, // can also be true or 'blocking'
    };
  } catch (err) {
    console.error(err);
    return {
      paths: [],
      fallback: false, // can also be true or 'blocking'
    };
  }
}

interface Params {
  slug: string;
}

export async function getStaticProps({ params }: { params: Params }) {
  const slug = params.slug;
  const markdown = fsSync.readFileSync(
    path.join(process.cwd(), `posts/${params.slug}.md`),
    "utf8"
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
