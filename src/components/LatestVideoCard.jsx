import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

function LatestVideoCard(props) {
  return (
    <Card {...props}>
      <CardContent>
        <Typography variant='cardTitle'>Latest Video Performance</Typography>
        <Box sx={styles.latestVideoContainer}>
          <Box
            sx={styles.latestVideoThumbnail}
            component={'img'}
            src='https://images.unsplash.com/photo-1619592982310-7b7d51e4207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80'
          />
          <Typography sx={styles.latestVideoTitle}>
            React Searchbar in 5 minut
          </Typography>
        </Box>
        <Typography sx={styles.latestVideoTimeLabel}>First 6 hours</Typography>
        <Box sx={styles.latestVideoStatsRow}>
            <Typography variant='h7'>Views</Typography>
            <Typography variant='h7'>225</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
            <Typography variant='h7'>Watch Time</Typography>
            <Typography variant='h7'>30</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
            <Typography variant='h7'>Likes</Typography>
            <Typography variant='h7'>23</Typography>
        </Box>
        <Typography sx={styles.cardAction} variant='link'>GO TO VIDEO ANALYTICS</Typography>
        <Typography sx={styles.cardAction} variant='link'>SEE COMMENTS(12)</Typography>
      </CardContent>
    </Card>
  );
}
/** @type {import("@mui/material").SxProps} */

const styles = {
  latestVideoContainer: {
    width: '100%',
    position: 'relative',
  },
  latestVideoThumbnail: {
    width: '100%',
    mt: 1,
    filter: 'brightness(20%)',
    display: 'block',
  },
  latestVideoTitle: {
    position: 'absolute',
    bottom: 0,
    color: 'neutral.light',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
    mb: 2,
  },
  latestVideoTimeLabel:{
    color:'neutral.normal',
    mt:2
  },
  latestVideoStatsRow:{
    display:'flex',
    justifyContent:'space-between',
    mt:2
    
  },
  cardAction:{
    mt:2,
  }
};
export default LatestVideoCard;
