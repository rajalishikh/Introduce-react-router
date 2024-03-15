
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
const UserIdDetails = () => {
    const userDetails=useLoaderData()
    const { name } = userDetails;
    return (
        <div>
            <h1>Show the user id Name{ name}</h1>
            
        </div>
    );
};
UserIdDetails.propTypes = {
    params:PropTypes.object
}

export default UserIdDetails;