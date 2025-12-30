import { useParams } from "react-router-dom";
import blogs from "../data/blogs";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <span>By Admin</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-10">
            {blog.content}
          </p>
          <hr className="mb-8" />
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
