import BlogPostCard from './BlogPostCard'

const BlogPostList = ({ posts, onDelete }) => {
  return (
    <div className='w-full mt-12 px-10 flex flex-wrap justify-center gap-8'>
      {posts.map((post) => (
        <BlogPostCard
          key={post.id}
          title={post.title}
          content={post.content}
          onDelete={() => onDelete(post.id)}
        />
      ))}
    </div>
  )
}

export default BlogPostList
