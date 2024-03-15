import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const postDetails = useLoaderData();
    const { id } = postDetails;
    return (
        <div>
            <p>Post Details:{ id}</p>
            
        </div>
    );
};

export default PostDetails;