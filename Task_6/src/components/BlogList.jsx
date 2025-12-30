import { useState } from "react";
import BlogContent from "./BlogContent";
import { Link } from "react-router-dom";
import blogs from "../data/blogs";

const BlogList = () => {
  const [post, setPost] = useState(blogs);

  const handleDeleteBlog = (id) => {
    const blogDelete = post.filter((blog) => blog.id !== id);
    setPost(blogDelete);
  };

  return (
    <>
      <div className="w-full mt-12 px-10 flex flex-wrap justify-center gap-8">
        {post.map((p) => (
          <BlogContent
            key={p.id}
            title={<Link to={`/blog/${p.id}`}>{p.title}</Link>}
            content={p.content}
            onDelete={() => {
              handleDeleteBlog(p.id);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BlogList;
