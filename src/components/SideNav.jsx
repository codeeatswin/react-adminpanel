import { Avatar, Box, Typography } from '@mui/material';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import { useTheme } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
function SideNav({ collapsed }) {
  const theme = useTheme();
  // 스테이트와 현재 선택된 패스경로를 알수있다. menu active와 연결된상태
  const location = useLocation();

  return (
    <Sidebar
      style={{ height: '100%', top: 'auto' }}
      breakPoint='md'
      backgroundColor={theme.palette.neutral.light}
      collapsed={collapsed}
    >
      <Box sx={styles.avatarContainer}>
        <Avatar
          sx={styles.avatar}
          alt='Channel Name'
          src='/public/avataaars.svg'
        />
        {!collapsed ? (
          <Typography variant='body2' sx={styles.yourChannel}>
            Your Channel
          </Typography>
        ) : null}
        {!collapsed ? (
          <Typography variant='overline'>React with Masoud</Typography>
        ) : null}
      </Box>
      <Menu
        menuItemStyles={{
          button: ({ active }) => {
            return {
              backgroundColor: active
                ? theme.palette.neutral.medium
                : undefined,
              color: active ? '#d359ff' : undefined,
            };
          },
          
        }}
      >
        <MenuItem
          active={location.pathname === '/'}
          component={<Link to='/' />}
          icon={<DashboardOutlinedIcon />}
        >
          <Typography variant='body2'> Dashboard</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === '/content'}
          component={<Link to='/content' />}
          icon={<SourceOutlinedIcon />}
        >
          <Typography variant='body2'> Content</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === '/analytics'}
          component={<Link to='/analytics' />}
          icon={<AnalyticsOutlinedIcon />}
        >
          <Typography variant='body2'> Analytics</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === '/customization'}
          component={<Link to='/customization' />}
          icon={<StyleOutlinedIcon />}
        >
          <Typography variant='body2'> Customization</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

/** @type {import("@mui/material").SxProps} */

const styles = {
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    my: 5,
  },
  avatar: {
    width: '40%',
    height: 'auto',
  },
  yourChannel: {
    mt: 1,
  },
};

export default SideNav;
