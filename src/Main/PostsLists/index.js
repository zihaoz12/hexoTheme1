import React from 'react';
import { Link } from 'react-router-dom';


const PostsList = (props) =>{
    let post = props.post
    return(
        <div>
            <article className="entry-items">
                <div className="post-thumb" style={{backgroundImage:`url(${post.url})`}}>
                    
                    <Link to={`posts/${post.id}`}>
                        <h3 className="item-name">{post.title}</h3>
                        <div className="item-desc">
                            <p>{post.description}</p>
                        </div>
                    </Link>
                    
                </div>
            </article>
        </div>
    )
}

export default PostsList;