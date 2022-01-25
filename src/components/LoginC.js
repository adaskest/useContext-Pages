import React, {useContext, useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom"
import context from "../context/context";


const LoginC = () => {
    const [error, setError] = useState('')
    const nav = useNavigate()
    const {setShowBtn, users, setLoggedUser, setCreareBtn} = useContext(context)

    const userNameRef = useRef()
    const pass1Ref = useRef()

    useEffect(() => {
        setShowBtn('register')
    })

    function login() {
        setLoggedUser(users.filter((user) => {
            if (user.userName === userNameRef.current.value && user.password === pass1Ref.current.value) {
                setError('')
                nav('/')
                setShowBtn('')
                setCreareBtn('create')
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