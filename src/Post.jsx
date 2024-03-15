import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import './Component/./User/user.css';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/postD/${id}`)
    }


    return (
        <div className='userDiv'>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to={`/postD/${id}`}>Show Details of Post</Link><br />
            <button onClick={handleClick}>Show details</button>
            
        </div>
    );
};

export default Post;
Post.propTypes = {
    post:PropTypes.object.isRequired
}