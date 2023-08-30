import { ThemeProvider } from '@emotion/react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './config/theme';
import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';

function App() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <React.Fragment>
      {/* 테마 */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Box sx={styles.container}>
        {/* 라우터 */}
          <BrowserRouter>
          <SideNav collapsed={collapsed} />
          <Box component={'main'} sx={styles.mainSection}>
          <AppRoutes/>
          </Box>
          
          </BrowserRouter>
        
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

// 메터리얼ui css 
/** @type {import("@mui/material").SxProps} */

const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)',
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
};

export default App;
