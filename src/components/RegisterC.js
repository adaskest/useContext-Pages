import React, {useContext, useEffect, useRef, useState} from 'react';
import context from "../context/context";
import {useNavigate} from "react-router-dom"

const RegisterC = () => {

    const {setShowBtn, users, setUsers} = useContext(context)
    const [error, setError] = useState('')

    const userNameRef = useRef()
    const pass1Ref = useRef()
    const pass2Ref = useRef()

    const nav = useNavigate()

    useEffect(() => {
        setShowBtn('login')
    })

    function register() {
        if (userNameRef.current.value.length === 0 || pass1Ref.current.value.length === 0) return setError('Fill all fields')
        if (pass1Ref.current.value !== pass2Ref.current.value) return setError('Passwords do not match')
        const user = {
            userName: userNameRef.current.value,
            password: pass1Ref.current.value
        }
        setUsers([...users, user])
        nav('/login')
    }

    return (
        <div className='d-flex column j-center a-cen'>
            <div className="box">
                <input ref={userNameRef} type="text" placeholder='UserName'/>
                <input ref={pass1Ref} type="text" placeholder='Password one'/>
                <input ref={pass2Ref} type="text" placeholder='Password two'/>
                <div onClick={register} className="btn">Register</div>
                <h3>{error}</h3>
            </div>
        </div>
    );
};

export default RegisterC;