import { Typography } from '@mui/material';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import { useTheme } from '@emotion/react';
function SideNav() {
  const theme = useTheme();
  return (
    <Sidebar
      style={{ height: '100%', top: 'auto' }}
      breakPoint='md'
      backgroundColor={theme.palette.neutral.light}
    >
      <Menu>
        <MenuItem active icon={<DashboardOutlinedIcon />}>
          <Typography variant='body2'> Dashboard</Typography>
        </MenuItem>
        <MenuItem active icon={<SourceOutlinedIcon />}>
          <Typography variant='body2'> Content</Typography>
        </MenuItem>
        <MenuItem active icon={<AnalyticsOutlinedIcon />}>
          <Typography variant='body2'> Analytics</Typography>
        </MenuItem>
        <MenuItem active icon={<StyleOutlinedIcon />}>
          <Typography variant='body2'> Customization</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideNav;
