import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/Login'>log in</Link>
            <Link to='/succesfull'>succesfull</Link>
        </div>
    );
};

export default Header;