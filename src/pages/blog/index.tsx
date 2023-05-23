import path from "path";
import fs from "fs/promises";
import Link from "next/link";
import Header from "@/components/Header";

const Blog = ({ paths }: { paths: Array<string> }) => {
  return (
    // <main className="px-2 md:max-w-3xl md:mx-auto">
    //   <h1 className="text-4xl font-bold text-center uppercase underline">
    //     Blog
    //   </h1>
    //   {paths.map((path) => (
    //     <div
    //       key={path}
    //       className="text-xl text-blue-600 hover:-translate-y-2 duration-100 ease-in m-2 hover:bg-blue-100 hover:text-blue-900 p-2"
    //     >
    //       <Link href={`/blog/${path}`}>{path}</Link>
    //     </div>
    //   ))}
    // </main>

    <section className="bg-gray-100 py-16 min-h-[calc(100vh-3.75rem)]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Blogs</h2>
        <ul className="space-y-4">
          {paths.map((path) => (
            <li key={path}>
              <Link className="text-xl font-bold" href={`/blog/${path}`}>
                {path}
              </Link>
              {/* <p className="text-gray-600">{blog.date}</p>
        <p className="text-gray-600">{blog.excerpt}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  const postsPath = path.join(process.cwd(), "posts");

  try {
    const files = await fs.readdir(postsPath);
    const fileNames = files.map((file) =>
      path.basename(file, path.extname(file))
    );
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
