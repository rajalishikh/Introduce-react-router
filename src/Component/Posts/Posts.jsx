import { useLoaderData } from "react-router-dom";
import Post from "../../Post";
import '../User/user.css';


const Posts = () => {
    const posts = useLoaderData();
    
    return (
        <div>
            <h1>Here is the all posts :{posts.length}</h1>
            <div className="user">
                {
                    posts.map(item2=><Post key={item2.id} post={item2}></Post>)
                }
            </div>
            
        </div>
    );
};

export default Posts;