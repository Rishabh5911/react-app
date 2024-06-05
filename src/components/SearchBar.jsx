import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <TextField
            label="Search Users"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
};

export default SearchBar;
