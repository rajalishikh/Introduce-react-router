import PropTypes from 'prop-types';
import "./user.css";

const User = ({ User }) => {
    const { name, email, phone } = User;
    

    return (
        <div className='userDiv' >
            
              <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
            
            
            
        </div>
    );
};

export default User;
User.propTypes= {
    User:PropTypes.object.isRequired
}