import React from 'react'
import Button from './Button'

const BlogContent = ({ title, content, onDelete }) => {
    return (
        <>
            <div className='w-[25%] h-50 p-5 border border-gray-200 rounded-lg shadow-sm'>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
                <Button text="Delete" onClick={onDelete}/>
            </div>
        </>
    )
}

export default BlogContent
