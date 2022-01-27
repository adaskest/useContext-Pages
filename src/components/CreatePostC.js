import React, {useContext, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import context from "../context/context";

const CreatePostC = () => {
    const {setPostsBtns, loggedUser, posts, setPosts} = useContext(context)
    const titleRef = useRef()
    const articleRef = useRef()
    const nav = useNavigate()

    function create() {
        const post = {
            title: titleRef.current.value,
            text: articleRef.current.value,
            username: loggedUser[0].userName,
            likes: [],
            like: '',
            comments: [],
            addComBtn: true,
            showComBtn: true
        }
        setPosts([...posts, post])
        setPostsBtns('create')
        nav('/')
    }

    return (
        <div className='d-flex column j-center a-cen'>
            <div className="box">
                <input ref={titleRef} type="text" placeholder='Title'/>
                <input ref={articleRef} type="text" placeholder='Article'/>
                <div onClick={create} className="btn">Create post</div>
            </div>
        </div>
    );
};

export default CreatePostC;