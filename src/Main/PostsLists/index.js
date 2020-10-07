import React from 'react';

const PostsList = (props) =>{
    let post = props.post
    return(
        <div>
            <article className="entry-items">
                <div className="post-thumb" style={{backgroundImage:`url(${post.url})`}}>
                    <a href="#/">
                        <h3 className="item-name">{post.title}</h3>
                        <div className="item-desc">
                            <p>{post.description}</p>
                        </div>
                    </a>
                </div>
            </article>
        </div>
    )
}

export default PostsList;