import React,{useState,useEffect} from "react";
import "./main.scss";
import PostsList from './PostsLists/index';
import {Link} from 'react-router-dom';



const Main =()=>{
    const[posts,setPosts] = useState([])

    const getPosts = async()=>{
        fetch('/posts.json').then(res => {
            console.log('res:',res);
            return res.json();
        }).then( data =>{
            console.log('data:',data);
            setPosts(data)
        }).catch( err =>{
            console.log('err:',err)
        })
    }

    useEffect(()=>{
        getPosts()
    },[])

    return(
        <div>
            <main>
                <div className="home">
                    <div className="container">
                        <div className="entry-header">
                            <h1>Hello World</h1>
                                <p>About Life, Images and Code</p>
                            <button id="createPost"><Link  to="/newpost">Create New Post</Link></button>
                        </div>
                        <div className="entry-lists">
                            {
                                posts.map(item =>
                                    <PostsList key={item.id} post={item}/>
                                )
                            }              
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}



export default Main;