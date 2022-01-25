import './App.css';
import context from "./context/context";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import {useState} from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";

function App() {
    const [showBtn, setShowBtn] = useState(null)
    const [createBtn, setCreareBtn] = useState('')
    const [users, setUsers] = useState([])
    const [loggedUser, setLoggedUser] = useState('')
    const [posts, setPosts] = useState([])

    const props = {
        showBtn, setShowBtn, users, setUsers,
        posts, setPosts, loggedUser, setLoggedUser,
        createBtn, setCreareBtn
    }


    return (
        <div>
            <context.Provider value={props}>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/' element={<Posts/>}/>
                        <Route path='/createPost' element={<CreatePost/>}/>
                    </Routes>
                </Router>

            </context.Provider>
        </div>
    );
}

export default App;
