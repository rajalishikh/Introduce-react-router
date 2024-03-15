import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Component/./User/user.css';

const Post = ({ post }) => {
    const { id,title, body } = post;
    return (
        <div className='userDiv'>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to= {`/postD/${id}`}>Show Details of Post</Link>
            
        </div>
    );
};

export default Post;
Post.propTypes = {
    post:PropTypes.object.isRequired
}