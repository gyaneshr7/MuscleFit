import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
import MediaQuery from 'react-responsive'


const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: "212px", xs: "70px" },
            ml: { sm: "50px" }
        }} position={"relative"} p={"20px"}>
            <Typography color={"red"} fontWeight={"600px"} fontSize={"26px"}>
                MuscleFit
            </Typography>
            <Typography fontWeight={"700px"} sx={{ fontSize: { lg: "44px", xs: "40px" } }} mb={"23px"} mt={"33px"}>
                Sweat, Lift <br /> and Repeat
            </Typography>
            <Typography fontSize={"22px"} lineHeight={"35px"} mb={"4px "}>
                Checkout some amazing exercises
            </Typography>
            <Button variant="contained" color="error" href='#exercises' style={{ top: "10px" }} sx={{
                backgroundColor: "red",
                padding: "10px"
            }}>Exercises for you</Button>
            <Typography fontWeight={600} color="black"
                sx={{
                    opacity: "0.1",
                    display: { lg: 'block', xs: "none" }
                }}
                fontSize={"200px"}
            >Exercises</Typography>
            <div>
                <MediaQuery minWidth={917}>
                    <img src={HeroBannerImage} className='img-fluid shadow-4' alt="banner"
                        style={{ width: "60%", height: "105%", position: "absolute", right: "-38px", top: "-295px" }} />
                </MediaQuery>
            </div>
        </Box>
    )
}

export default HeroBanner