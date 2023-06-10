import React from "react";
import fsSync from "fs";
import fs from "fs/promises";
import path from "path";
import MarkdownIt from "markdown-it";
import Article from "@/components/Article";
import Link from "next/link";
import matter from "gray-matter";
import Header from "@/components/Header";

type Props = {
  html: string;
  data: {
    title: string;
    date: string;
  };
};

const page = ({ html, data }: Props) => {
  return (
    <>
      <main className="container mt-8 space-y-2">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold uppercase">{data.title}</h1>
          <div className="text-sm italic">
            <p>{data.date}</p>
          </div>
        </div>
        <Article html={html} />
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
  const { data, content } = matter(markdown);

  const html = MarkdownIt().render(content);

  return {
    props: {
      html,
      data,
    },
  };
}

export default page;
