import React from 'react';

const Post = (match)=>{
    console.log(match.match.url);
    
    return(
        <div className="container">
            <h1>Post</h1>
        </div>
    )
}

export default Post;