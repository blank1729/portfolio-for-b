import path from "path";
import fs from "fs/promises";
import Link from "next/link";
import matter from "gray-matter";
import { readFileSync } from "fs";
import Header from "@/components/Header";

interface Data {
  title: string;
  data: string;
}

interface blogProps {
  title: string;
  slug: string;
}

const Blog = ({ paths }: { paths: Array<blogProps> }) => {
  return (
    <>
      <main className="mt-8">
        <section className="container">
          <ul className="space-y-3">
            {paths.map((path) => (
              <li key={path.slug}>
                <Link
                  className="text-lg hover:underline duration-150 ease-in-out"
                  href={`/blog/${path.slug}`}
                >
                  {path.title}
                </Link>
                {/* <p className="text-gray-600">{blog.date}</p> */}
                {/* <p className="text-gray-600">{blog.excerpt}</p> */}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const postsPath = path.join(process.cwd(), "posts");

  try {
    const files = await fs.readdir(postsPath);

    const fileNames = files.map((file) => {
      const slug = path.basename(file, path.extname(file));
      const { data } = matter(
        readFileSync(path.join(process.cwd(), `posts/${slug}.md`), "utf8")
      );
      return {
        title: data.title,
        slug: slug,
      };
    });
    return {
      props: {
        paths: fileNames,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        paths: [],
      },
    };
  }
}

export default Blog;
