import React, {useContext, useEffect} from 'react';
import context from "../context/context";


const PostsC = () => {
    const {loggedUser, posts} = useContext(context)


    return (
        <div className='d-flex wrap'>
            {posts.map((post, i) =>
            <div key={i} className='article'>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
                <p>{loggedUser[0].userName}</p>
            </div>
            )}
        </div>
    );
};

export default PostsC;