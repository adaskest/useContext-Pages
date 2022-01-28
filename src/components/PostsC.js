import React, {useContext, useEffect, useRef} from 'react';
import context from "../context/context";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";


const PostsC = () => {
    const commentRef = useRef()
    const {
        posts,
        loggedUser,
        setPosts,
        setPostsCount,
    } = useContext(context)

    useEffect(() => {
        setPostsCount()
    }, [])

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

    function showAddCom(index) {
        posts[index].addComBtn = !posts[index].addComBtn
        return setPosts([...posts])
    }

    function addComment(index) {
        const comment = {
            text: commentRef.current.value,
            user: loggedUser[0].userName
        }
        posts[index].comments.unshift(comment)
        posts[index].addComBtn = !posts[index].addComBtn
        posts[index].showComBtn = false
        return setPosts([...posts])
    }

    function showCom(index) {
        posts[index].showComBtn = !posts[index].showComBtn
        return setPosts([...posts])
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
                        <p>Likes: {post.likes.length}</p>
                        <p>Comments ({post.comments.length})</p>
                    </div>
                    <div>
                        <div onClick={() => showAddCom(i)}
                             className="btn">{post.addComBtn ? 'Add comment' : 'Close'}</div>
                        {post.comments.length !== 0 && <div onClick={() => showCom(i)}
                                                            className="btn">{post.showComBtn ? "Show Comments" : 'Hide Comments'}</div>}
                    </div>
                    <div className='box2'>
                        {!post.addComBtn &&
                            <div className="box">
                                <textarea ref={commentRef} rows={5}/>
                                <div onClick={() => addComment(i)} className="btn">Submit</div>
                            </div>}
                        {!post.showComBtn && <div>
                            {post.comments.map((comment, i) => <div key={i} className='comment'>
                                <h3>Username: {comment.user}</h3>
                                <p>{comment.text}</p>
                            </div>)}
                        </div>}
                    </div>
                </div>
            )}
        </div>
    )
        ;
};

export default PostsC;