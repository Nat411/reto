import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "./styles.css";


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
        >
        <MenuRoundedIcon />
        <AccountCircleRoundedIcon />
        </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{".MuiPaper-root": {
            minWidth: "200px",
            borderRadius:"16px",
            boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
        },
    }}
      >
        <MenuItem className = "menuItem" onClick={handleClose}>
            Regístrate
        </MenuItem>
        <MenuItem className = "menuItem" onClick={handleClose}>
            Inicia sesión
        </MenuItem>
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--grey)",
            width: "100%",
          }}
        />
        <MenuItem className = "menuItem" onClick={handleClose}>Pon tu espacio en Airbnb</MenuItem>
        <MenuItem className = "menuItem" onClick={handleClose}>Centro de ayuda</MenuItem>
      </Menu>
    </div>
  );
}