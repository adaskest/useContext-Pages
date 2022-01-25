import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom"
import context from "../context/context";

const Header = () => {

    const {showBtn, createBtn, setCreareBtn} = useContext(context)
    const nav = useNavigate()

    function home() {
        setCreareBtn('create')
        nav('/')
    }

    function create() {
        setCreareBtn('home')
        nav('/createPost')
    }

    return (<div className='header'>
        {showBtn !== '' && <div>
            {showBtn !== 'register' && <Link to='/login' className="btn">Login</Link>}
            {showBtn !== 'login' && <Link to='/register' className="btn">Register</Link>}
        </div>}
        {createBtn !== '' && <div>
            {createBtn !== 'home' && <div onClick={create} className='btn'>Create post</div>}
            {createBtn !== 'create' && <div onClick={home} className='btn'>Home</div>}
        </div>}
    </div>);
};

export default Header;