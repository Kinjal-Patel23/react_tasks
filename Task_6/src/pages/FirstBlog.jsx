import React from 'react'
import { useParams } from 'react-router-dom'

const FirstBlog = () => {

    const { id } = useParams();

    return (
        <>
            <div className="p-10">
                <h1 className="text-3xl font-bold mb-4">
                    Blog ID: {id}
                </h1>

                <p className="text-gray-600">
                    welcome
                </p>
            </div>
        </>
    )
}

export default FirstBlog
