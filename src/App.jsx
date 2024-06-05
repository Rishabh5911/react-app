import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import Container from '@mui/material/Container';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <Navbar />
            <Container>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <UserList searchTerm={searchTerm} />
            </Container>
        </div>
    );
};

export default App;
