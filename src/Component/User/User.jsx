import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./user.css";

const User = ({ User }) => {
    const {id, name, email, phone } = User;
    

    return (
        <div className='userDiv' >
            
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/User/${id}`}>Show Details</Link>
            
            
            
        </div>
    );
};

export default User;
User.propTypes= {
    User:PropTypes.object.isRequired
}