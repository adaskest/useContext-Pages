import React, {useContext, useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom"
import context from "../context/context";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";


const LoginC = () => {
    const [error, setError] = useState('')
    const nav = useNavigate()
    const {setLoginBtns, users, setLoggedUser, setPostsBtns, setLogoutBtns, posts, setPosts} = useContext(context)

    const userNameRef = useRef()
    const pass1Ref = useRef()

    useEffect(() => {
        setLoginBtns('register')
    })

    function login() {
        setLoggedUser(users.filter((user) => {
            if (user.userName === userNameRef.current.value && user.password === pass1Ref.current.value) {
                setError('')
                nav('/')
                setLoginBtns('')
                setPostsBtns('create')
                setLogoutBtns('some')
                setPosts(posts.map(post => {
                        if (post.likes.includes(user.userName)) {
                            post.like = <FaThumbsDown/>
                            return post
                        } else {
                            post.like = <FaThumbsUp/>
                            return post
                        }
                    }
                ))
                return user
            } else {
                return setError('Wrong UserName or Password')
            }
        }))
    }


    return (
        <div className='d-flex column j-center a-cen'>
            <div className="box">
                <input ref={userNameRef} type="text" placeholder='UserName'/>
                <input ref={pass1Ref} type="text" placeholder='Password one'/>
                <div onClick={login} className="btn">Login</div>
                <h3>{error}</h3>
            </div>
        </div>
    );
};

export default LoginC;