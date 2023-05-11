import React from "react";
import fs from "fs";
import path from "path";
import MarkdownIt from "markdown-it";
import Article from "@/components/Article";

const page = ({ params }: { params: { slug: string } }) => {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), `posts/${params.slug}.md`),
    "utf8"
  );
  // Convert the markdown to HTML using markdown-it
  const html = MarkdownIt().render(markdown);
  return (
    <>
      <nav>nav</nav>
      <main className="grid mx-[15%]">
        <article className="grid gap-4">
          <h1 className="uppercase">{params.slug}</h1>
          <Article html={html} title={params.slug}/>
        </article>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default page;
