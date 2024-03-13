import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to my home </h1>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;