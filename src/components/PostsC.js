import React, {useContext} from 'react';
import context from "../context/context";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";



const PostsC = () => {
    const {
        posts,
        loggedUser,
        setPosts
    } = useContext(context)


    function countLikes(id) {
        if (!posts[id].likes.includes(loggedUser[0].userName)) {
            posts[id].likes.unshift(loggedUser[0].userName)
            posts[id].like = <FaThumbsDown/>
            return setPosts([...posts])
        } else {
            posts[id].likes.splice(loggedUser[0].userName, 1)
            posts[id].like = <FaThumbsUp/>
            return setPosts([...posts])
        }
    }

    return (
        <div className='d-flex wrap'>
            {posts.map((post, i) =>
                <div key={i} className='article'>
                    <h1>{post.title}</h1>
                    <p>Post: {post.text}</p>
                    <p>UserName: {post.username}</p>
                    <div className='likes'>
                        {post.username !== loggedUser[0].userName &&
                            <div onClick={() => countLikes(i)} className='like'>
                                {post.like}
                            </div>}
                        <p>
                            Likes: {post.likes.length > 0? post.likes.length : 0}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostsC;