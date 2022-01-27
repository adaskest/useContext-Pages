import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom"
import context from "../context/context";

const Header = () => {

    const {
        loginBtns,
        postsBtns,
        setPostsBtns,
        loggedUser,
        setLoggedUser,
        setLoginBtns,
        logoutBtns,
        setLogoutBtns
    } = useContext(context)
    const nav = useNavigate()

    function home() {
        setPostsBtns('create')
        nav('/')
    }

    function create() {
        setPostsBtns('home')
        nav('/createPost')
    }

    function logout() {
        setLoggedUser('')
        setLoginBtns('login')
        setPostsBtns('')
        setLogoutBtns('')
        nav('/login')
    }

    return (<div className='header'>
        {loginBtns !== '' && <div>
            {loginBtns !== 'register' && <Link to='/login' className="btn">Login</Link>}
            {loginBtns !== 'login' && <Link to='/register' className="btn">Register</Link>}
        </div>}
        {postsBtns !== '' && <div className='d-flex a-cen j-btw w-100'>
            {postsBtns !== 'home' && <div onClick={create} className='btn'>Create post</div>}
            {postsBtns !== 'create' && <div onClick={home} className='btn'>Home</div>}
            {logoutBtns !== '' && <div className='d-flex a-cen'>
                <h2>Username: {loggedUser.length > 0 ? loggedUser[0].userName : ''}</h2>
                <div onClick={logout}
                     className="btn">Log Out
                </div>
            </div>}
        </div>}
    </div>);
};

export default Header;