import React,{useState,useEffect} from "react";
import "./main.scss";
import PostsList from './PostsLists/index';



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
                            <button>Testing</button>
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

// class Main extends Component{
//     render(){
//         return(
//             <div>
//                 <main>
//                     <div className="home">
//                         <div className="container">
//                             <div className="entry-header">
//                                 <h1>Hello World</h1>
//                                 <p>About Life, Images and Code</p>
//                                 <button>Testing</button>
//                             </div>

//                             <div className="entry-lists">

//                                 <article className="entry-items">
//                                     <div className="post-thumb" style={{backgroundImage:"url(https://images.unsplash.com/photo-1557167045-84a590d5ca22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1685&q=80)"}}>
//                                         <a href="#">
//                                             <h3 className="item-name">item name</h3>
//                                             <div className="item-desc">
//                                                 <p>item description</p>
//                                             </div>
//                                         </a>
//                                     </div>
//                                 </article>

//                                 <article className="entry-items">
//                                     <div className="post-thumb" style={{backgroundImage:"url(https://images.unsplash.com/photo-1557167045-84a590d5ca22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1685&q=80)"}}>
//                                         <a href="#">
//                                             <h3 className="item-name">item name</h3>
//                                             <div className="item-desc">
//                                                 <p>item description</p>
//                                             </div>
//                                         </a>
//                                     </div>
//                                 </article>
                                
//                                 <article className="entry-items">
//                                     <div className="post-thumb" style={{backgroundImage:"url(https://images.unsplash.com/photo-1557167045-84a590d5ca22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1685&q=80)"}}>
//                                         <a href="#">
//                                             <h3 className="item-name">item name</h3>
//                                             <div className="item-desc">
//                                                 <p>item description</p>
//                                             </div>
//                                         </a>
//                                     </div>
//                                 </article>
                                
                                
//                             </div>
//                         </div>           
//                     </div>

//                     <div className="pagintor">
//                         <a href="#" className="more">More</a>
//                     </div>
            
//                 </main>
//             </div>
//         )
//     };
// }

export default Main;