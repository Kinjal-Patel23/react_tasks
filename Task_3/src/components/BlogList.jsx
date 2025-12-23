import React, { useState } from 'react'
import BlogContent from './BlogContent';

const BlogList = () => {

  const blogs = [
    {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the first blog post. It explains the basic idea of blogging."
  },
  {
    id: 2,
    title: "Learning JavaScript",
    content: "JavaScript is a popular programming language used to create dynamic and interactive websites."
  },
  {
    id: 3,
    title: "Why Learn React",
    content: "React helps in building fast and reusable UI components for modern web applications."
  },
  {
    id: 4,
    title: "Node.js Basics",
    content: "Node.js allows JavaScript to run on the server side and is used to build scalable applications."
  },
  {
    id: 5,
    title: "CSS Tips for Beginners",
    content: "CSS is used to style web pages. Start with flexbox, colors, and basic layouts."
  },
  {
    id: 6,
    title: "React Tips for Beginners",
    content: "React is Javascript library. It is mainly used to create a single page application"
  }
  ];

  const [post, setPost] = useState(blogs);

  const handleDeleteBlog = (id) => {
    const blogDelete = post.filter((_,i) => i !== id);
    setPost(blogDelete);
  }

  return (
    <>
      <div className='w-full mt-12 px-10 flex flex-wrap justify-center gap-8'>
        {post.map((p,i) => (
            <BlogContent 
                key={i}
                title={p.title}
                content={p.content}
                onDelete={() => {handleDeleteBlog(p.id)}}
            />
        ))}
      </div>
    </>
  )
}

export default BlogList
