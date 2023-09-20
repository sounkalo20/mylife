import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%",
               display : "flex",
               justifyContent : "center",
               alignItems : "center",
               position : 'fixed',
               bottom : 20
            }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <NavLink to="/">
            <BottomNavigationAction label="Acceuil" icon={<HomeIcon />} />
        </NavLink>
        <NavLink to='/about'>
            <BottomNavigationAction label="Favorites" icon={<InfoIcon />} />
        </NavLink>
        <NavLink to='/profil'>
            <BottomNavigationAction label="Nearby" icon={<AccountCircleIcon />} />
        </NavLink>
      </BottomNavigation>
    </Box>
  );
}