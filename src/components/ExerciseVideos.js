import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
 
  if(!exerciseVideos.length) return 'Loading...';

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' }}} p='20px'>
        <Typography variant='h3' mb='33px'> 
            Here are some <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise videos to watch! 
        </Typography>
        <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' 
            sx={{
                flexDirection: { lg: 'row' },
                gap: { lg: '110px', xs: '0' }
            }}
        >
            {exerciseVideos?.slice(0, 4).map((item, index) => (
                <a
                    className='exercise-video'
                    key={index}
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                    <Box>
                        <Typography variant='h4' color='#000'>
                            {item.video.title}
                        </Typography>
                        <Typography variant='h6' color='red'>
                            {item.video.channelName}
                        </Typography>
                    </Box>
                </a>
            ))}
        </Stack>
    </Box>
  )
};

export default ExerciseVideos;