import React, {useContext, useEffect} from 'react';
import context from "../context/context";

const Footer = () => {

    const {userPosts} = useContext(context)

    let userLikes = 0
    let userComments = 0

    for (const key in userPosts) {
        userLikes += userPosts[key].likes.length
        userComments += userPosts[key].comments.length
    }

    return (<div className='footer'>
        <div>
            <div className='d-flex j-btw'>
                <h3>Posts: {userPosts.length} Likes: {userLikes} Comments: {userComments}</h3>
            </div>
        </div>
    </div>);
};

export default Footer;