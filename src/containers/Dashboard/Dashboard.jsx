import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';
import React from 'react';
import LatestVideoCard from '../../components/LatestVideoCard';
import ColorText from '../../components/ColorText';

function Dashboard() {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant='h5'>
        Channel Dashboard
      </Typography>

      <Box sx={styles.columnContainer}>
        {/* Latest Video Performance */}
        <LatestVideoCard sx={styles.item} />
        {/* Latest Post */}
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant='cardTitle'>Latest post</Typography>
            <Box sx={styles.postAuthorSection}>
              <Avatar sx={styles.avatar} src='./avataaars.svg' />
              <Typography sx={styles.postMeta}>React with Masoud</Typography>
              <Typography sx={styles.postMeta}>August 30, 2023</Typography>
            </Box>
            <Typography variant='body2'>
              I asked chatGPT to tell me a joke about react js, he is not only
              smart but also funny :)) we are going to have a video it tomorrow.
            </Typography>
            <Divider sx={styles.divider} />
            <Box sx={styles.postStats}>
              <Typography variant='body2'>Likes</Typography>
              <Typography variant='body2'>Comments</Typography>
              <Typography variant='h6'>12</Typography>
              <Typography variant='h6'>6</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant='link'>
              GO TO COMMUNITY BAR
            </Typography>
          </CardContent>
        </Card>
        {/* Channel analytics */}
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant='cardTitle'>Channel analytics</Typography>
            <Typography variant='h7'>Current Subscribers</Typography>
            <Typography variant='h4'>4,144</Typography>
            <Typography variant='h7'>
              <ColorText color={'green.main'}>+77 </ColorText>
              <ColorText color='neutral.normal'>in last 28 days</ColorText>
            </Typography>
            <Divider sx={styles.divider} />
            <Typography variant='h6'>Summery</Typography>
            <Typography variant='h8'>
              <ColorText color={'neutral.normal'}>Last 28 days</ColorText>
            </Typography>

            <Box sx={styles.VideoStatsRow}>
              <Typography variant='h7'>Views</Typography>
              <Typography variant='h7'>225</Typography>
            </Box>
            <Box sx={styles.VideoStatsRow}>
              <Typography variant='h7'>Watch Time (hours)</Typography>
              <Typography variant='h7'>30</Typography>
            </Box>
            <Box sx={styles.VideoStatsRow}>
              <Typography variant='h7'>Estimated Revenue</Typography>
              <Typography variant='h7'>$450</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Typography variant='h6'>Top Videos</Typography>
            <Typography variant='h8'>
              <ColorText color={'neutral.normal'}>Last 48 hours.</ColorText>
            </Typography>

            <Box sx={styles.VideoStatsRow}>
              <Typography variant='h7'>
                How to become a software developer in 2023
              </Typography>
              <Typography variant='h7'>450</Typography>
            </Box>
            <Box sx={styles.VideoStatsRow}>
              <Typography variant='h7'>
                CSS Grid tutorial: How to use Grids to make awesome user
                interfaces.
              </Typography>
              <Typography variant='h7'>287</Typography>
            </Box>
            <Box sx={styles.VideoStatsRow}>
              <Typography variant='h7'>
                Call APIS in react native: practical guide
              </Typography>
              <Typography variant='h7'>130</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant='link'>
              GO TO VIDEO ANALYTICS
            </Typography>
          </CardContent>
        </Card>
        {/* Latest comments */}
        <Card sx={styles.item}>
          <CardContent>
            <Typography variant='cardTitle'>Latest comments</Typography>
            <Typography variant='h7'>
              <ColorText color='neutral.normal'>
                Channel comments I have't responded to{' '}
              </ColorText>
            </Typography>

            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src='./avataaars.svg' />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>
                    React with Masoud
                  </Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  Get tips from a successful creator on how to Youtube channel
                  and turn it into a business that earns you money
                </Typography>
              </Box>
              <Box
                component={'img'}
                sx={styles.videoThumbnail}
                src='https://images.unsplash.com/photo-1619592982310-7b7d51e4207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80'
              />
            </Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src='./avataaars.svg' />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>
                    React with Masoud
                  </Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  How can I deploy this?
                </Typography>
              </Box>
              <Box
                component={'img'}
                sx={styles.videoThumbnail}
                src='https://images.unsplash.com/photo-1619592982310-7b7d51e4207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80'
              />
            </Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src='./avataaars.svg' />
              <Box>
                <Box sx={styles.commentDetailsSection}>
                  <Typography sx={styles.postMeta}>
                    React with Masoud
                  </Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  Thank you, was very much
                </Typography>
              </Box>
              <Box
                component={'img'}
                sx={styles.videoThumbnail}
                src='https://images.unsplash.com/photo-1619592982310-7b7d51e4207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80'
              />
            </Box>

            <Typography sx={styles.cardAction} variant='link'>
              VIEW MORE
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

/** @type {import("@mui/material").SxProps} */

const styles = {
  pageTitle: {
    mb: 2,
  },
  columnContainer: {
    columns: '280px 3',
    maxWidth: 1400,
  },
  item: {
    mb: 2,
  },
  postAuthorSection: {
    display: 'flex',
    alignItems: 'center',
    my: 3,
  },
  avatar: {
    width: '30px',
    height: 'auto',
    mr: 1,
  },
  postMeta: {
    mr: 1,
    fontSize: '0.8rem',
    color: 'neutral.normal',
  },
  divider: {
    my: 2,
  },
  postStats: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    my: 3,
  },
  cardAction: {
    mt: 2,
  },
  VideoStatsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    mt: 2,
    '&:hover': {
      color: 'primary.main',
      cursor: 'pointer',
    },
  },
  commentRow:{
    display:'flex',
    alignItems:'flex-start',
    mt:2,
  },
 
  commentDetailsSection:{
    display:'flex',
    alignItems:'center'
  },

  commentText:{
    fontSize:'0.8rem',
    mt:0.5,
    mr:2,

  },
  videoThumbnail:{
    width:80,
    ml:'auto',
  }

};

export default Dashboard;
