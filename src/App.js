import './App.css';
import context from "./context/context";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState} from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";


function App() {
    const [loginBtns, setLoginBtns] = useState(null)
    const [postsBtns, setPostsBtns] = useState('')
    const [logoutBtns, setLogoutBtns] = useState('')
    const [users, setUsers] = useState([])
    const [loggedUser, setLoggedUser] = useState('')
    const [posts, setPosts] = useState([])
    const [userPosts, setUserPosts] = useState([])

    function setPostsCount() {
        setUserPosts(posts.filter((post, i) => {
            if (post.username === loggedUser[0].userName) {
                return post
            }
        }))
    }
    const props = {
        loginBtns,
        setLoginBtns,
        users,
        setUsers,
        posts,
        setPosts,
        loggedUser,
        setLoggedUser,
        postsBtns,
        setPostsBtns,
        logoutBtns,
        setLogoutBtns,
        userPosts,
        setUserPosts,
        setPostsCount,
    }

    return (<div className='page'>
        <context.Provider value={props}>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/' element={<Posts/>}/>
                    <Route path='/createPost' element={<CreatePost/>}/>
                </Routes>
                <Footer/>
            </Router>

        </context.Provider>
    </div>);
}

export default App;
