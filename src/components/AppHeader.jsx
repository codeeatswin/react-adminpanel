import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
function AppHeader({collapsed,setCollapsed}) {

  return (
    <AppBar position='sticky' sx={styles.appBar}>
      <Toolbar>
        <IconButton
          onClick={() => {
            setCollapsed(!collapsed)
          }}
          color='secondary'
        >
          <MenuTwoToneIcon />
        </IconButton>
        <Box
          component={'img'}
          sx={styles.appLogo}
          src='/src/assets/react.svg'
        />
        <Box sx={{flexGrow:1}}/>
        <IconButton title='Notifications' color='secondary'>
          <Badge badgeContent={14} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton title='setting' color='secondary'>
          <SettingsIcon/>
        </IconButton>
        <IconButton title='Sign Out' color='secondary'>
          <LogoutIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

/** @type {import("@mui/material").SxProps} */

const styles = {
  appBar: {
    bgcolor: 'neutral.main',
  },
  appLogo:{
    borderRadius:2,
    // width:80,
    ml:2,
    cursor:'pointer'
  }
};

export default AppHeader;
