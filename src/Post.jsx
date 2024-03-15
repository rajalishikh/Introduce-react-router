import PropTypes from 'prop-types';
import './Component/./User/user.css';

const Post = ({ post }) => {
    const { title, body } = post;
    return (
        <div className='userDiv'>
            <h1>{title}</h1>
            <p>{ body}</p>
            
        </div>
    );
};

export default Post;
Post.propTypes = {
    post:PropTypes.object.isRequired
}