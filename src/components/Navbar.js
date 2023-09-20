import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500,
               position : "absolute",
               bottom : 20,
               right : 600,
            }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <NavLink to="/">
            <BottomNavigationAction label="Acceuil" icon={""} />
        </NavLink>
        <NavLink to='/about'>
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </NavLink>
        <NavLink to='/profil'>
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </NavLink>
      </BottomNavigation>
    </Box>
  );
}