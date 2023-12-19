import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';


export default function MySidebar() {
  const sidebarStyle = {
    backgroundColor: '#343a40', // Background color similar to the navbar
    // Text color
    fontSize: '2rem', // Font size
    padding: '30px', // Padding for better spacing
    marginTop: '60px',
     // Adjusted margin-top to avoid overlapping with navbar
  };
  const menuStyle = {
    backgroundColor: '#343a40', // Background color similar to the navbar
    // Text color
    fontSize: '2rem', // Font size
     // Padding for better spacing
    color:'white',
    height:'80vh'
     // Adjusted margin-top to avoid overlapping with navbar
  };

  return (
    <Sidebar style={sidebarStyle}>
      <Menu style={menuStyle} >
       
        <MenuItem><Link to='/dashboard'> Dashboard </Link></MenuItem>
        <MenuItem><Link to='/category'>Category</Link>  </MenuItem>
        <MenuItem> Product </MenuItem>
        <MenuItem> Top product </MenuItem>
        <MenuItem> Deal </MenuItem>
        <MenuItem> Auth </MenuItem>
      </Menu>
    </Sidebar>
  );
}
