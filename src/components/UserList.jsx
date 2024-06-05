import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';

const UserList = ({ searchTerm }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // filtering users on the basis of their names
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    

    if (loading) {
        return <CircularProgress />;
    }

    const listItemStyling = {
        border:'1px solid black',
        borderRadius:'4px',
        padding:'10px 0px',
        maxWidth:'250px',
        margin:'0 auto',
        textAlign:'center'
    }

   

    return (
        <List>
            {filteredUsers.map(user => (
                <ListItem key={user.id}>
                    <ListItemText primary={user.name} secondary={user.email} style={listItemStyling}/>
                </ListItem>
            ))}
        </List>
    );
};

export default UserList;
