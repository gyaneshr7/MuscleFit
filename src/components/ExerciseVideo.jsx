import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideo = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length)
    return 'Loading...'

    const capitalizeFirstLowercaseRest = (str) => {
      return (
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
      );
    };

  return (
    <Box sx={{
      marginTop: { lg: "200px", xs: "20px" }
    }} p={"20px"}>
      <Typography variant='h4' mb={"33px"}>
        Watch <span style={{
          color: "darkred"
        }}>{capitalizeFirstLowercaseRest(name)}</span> exercise videos
      </Typography>
      <Stack justifyContent={"flex-start"} flexWrap={"wrap"}
        alignItems={"center"} sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" }
        }}>
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel='noreferrer'
            style={{textDecoration:"none"}}
          >
            <img src={item.video.thumbnails[0].url}
              alt={item.video.title} srcset="" />
              <Box>
                <Typography variant='h5' color={"black"}>
                   {item.video.title}
                </Typography>
                
                <Typography variant='h6' color={"black"}>
                   {item.video.channelName}
                </Typography>
              </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideo