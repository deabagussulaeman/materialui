import { IconButton , classes , MenuIcon } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Router from 'next/router'

export default function Navbar() {
  return (
    <AppBar position="sticky">
        <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton> */}
            {/* <Typography variant="h6" className={classes.title}>
            News
            </Typography> */}

            <Button color="inherit" onClick={() => {
                Router.push('/');
            }}>Home</Button>
            <Button color="inherit" onClick={() => {
                Router.push('/component');
            }}>Component</Button>
        </Toolbar>
    </AppBar>
  )
}