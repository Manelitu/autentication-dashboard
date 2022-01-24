import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function PositionedMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <Button
            id="button-positioned"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <img 
                src={props.icon} 
                alt="gear icon" 
                style={{width: '2rem', height: '1.4rem'}}/>
        </Button>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="button-positioned"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
        >
            <MenuItem onClick={handleClose}>{props.option}</MenuItem>
            <MenuItem onClick={handleClose}>{props.option2}</MenuItem>
            <MenuItem onClick={handleClose}>{props.option3}</MenuItem>
        </Menu>
    </div>
  );
}