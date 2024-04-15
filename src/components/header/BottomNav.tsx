import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottom-nav">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Explora" icon={<SearchRoundedIcon />} />
        <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Iniciar sesión" icon={<AccountCircleRoundedIcon />} />
      </BottomNavigation>
    </div>
  );
}