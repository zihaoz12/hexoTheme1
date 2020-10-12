import React from 'react';
import { Link } from 'react-router-dom';

const NewPost = ()=>{
    return(
        <div className="container">
            <h1>Create New post</h1>
                <a className="imugrLink" href="https://imgur.com/upload">Tips: Use <strong>Imgur</strong> <span><i className="fas fa-external-link-alt"></i></span> to create your img Url</a>
                <form className="posts-form" id="createFrom" action="/posts" method="POST">
                    <label htmlFor="title"></label>
                        <input type="text"  name="title" placeholder="Title"/>
                    <label ></label>
                        <input type="text"  name="imgUrl" placeholder="imgUrl..."/>
                    <label htmlFor="message"></label>
                        <textarea id="desc" name="description" rows="5" placeholder="Description"></textarea>
                    <span id="status"></span>
                        <button type="submit" id="submitButton" name="submit">New Post</button>
                </form>

            <div className="go-back">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}

export default NewPost;