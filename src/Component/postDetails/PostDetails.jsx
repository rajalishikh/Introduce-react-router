import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const postDetails = useLoaderData();
    const navigate2 = useNavigate();
    const handleClick = () => {
        navigate2(-1)
        
    }
    const { id } = postDetails;
    return (
        <div>
            <p>Post Details:{id}</p>
            <button onClick={ handleClick
            } >Go back home</button>
            
        </div>
    );
};

export default PostDetails;