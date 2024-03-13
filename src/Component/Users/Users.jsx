import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import '../User/user.css';

const Users = () => {
    const users=useLoaderData()
    return (
        <div>
            <p>Our total users is { users.length}</p>
            <p>The are so much Innocent and good users </p>
            <div className="user">
            {
                users.map(item=><User key={item.id} User={item}></User>)
            }
           

            </div>
            
            
        </div>
    );
};

export default Users;