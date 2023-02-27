import React from 'react'
import Carousel from 'better-react-carousel'
import Layout from '../components/Layout/Layout'
import { Box } from '@mui/material';
import i1 from '../images/1.jpeg'
import i2 from '../images/2.jpeg'
import i3 from '../images/3.jpeg'
import i4 from '../images/4.jpeg'
import i5 from '../images/5.jpeg'
import i6 from '../images/6.jpeg'
import i7 from '../images/7.jpeg'

import i9 from '../images/9.jpeg'
import i10 from '../images/10.jpeg'
import i11 from '../images/11.jpeg'
import i12 from '../images/12.jpeg'
import video from '../images/1 (2).mp4'
import i13 from '../images/13.jpeg'
import i14 from '../images/14.jpeg'
import i15 from '../images/15.jpeg'
import i16 from '../images/16.jpeg'
import i17 from '../images/17.jpeg'
import i20 from '../images/20.jpeg'

import { CenterFocusStrong } from '@mui/icons-material';


const Gallery = () => {
  return (
    <Layout>
      <Box sx={{
        "& h2":{
          fontWeight:'bold',
          fontFamily:'Dancing Script' ,
          backgroundColor:'#E4C0BB',
          textAlign:'center',
        }


      }}>
     <h2> A Glimpse</h2>
    <Carousel cols={3} rows={1} loop>
      <Carousel.Item>
        <img width="100%" src={i12} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={i2} object-fit = "cover"/>
      </Carousel.Item>
      <Carousel.Item>
        <video src={video} autoplay="true" width="100%" height="300" controls="controls"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={i3} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src = {i4}/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src = {i5}/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src = {i6}/>
      </Carousel.Item><Carousel.Item>
        <img width="100%" src = {i7}/>
      
      </Carousel.Item><Carousel.Item>
        <img width="100%" src = {i9}/>
      </Carousel.Item><Carousel.Item>
        <img width="100%" src = {i10}/>
      </Carousel.Item><Carousel.Item>
        <img width="100%" height={300} src = {i20}/>
        </Carousel.Item><Carousel.Item>
        <img width="100%" src = {i12}/>
        </Carousel.Item><Carousel.Item>
        <img width="100%" src = {i13}/>
        </Carousel.Item><Carousel.Item>
        <img width="100%" height={300} src = {i14}/>
        </Carousel.Item><Carousel.Item>
        <img width="100%" height={300} src = {i15}/>
        </Carousel.Item><Carousel.Item>
        <img width="100%" height={300} src = {i16}/>
        </Carousel.Item><Carousel.Item>
        <img width="100%" height={300} src = {i17}/>
        </Carousel.Item><Carousel.Item>
        <img width="100%" height={300} src = {i11}/>
      </Carousel.Item>
    </Carousel>
    </Box>
    </Layout>
  )
}

export default Gallery