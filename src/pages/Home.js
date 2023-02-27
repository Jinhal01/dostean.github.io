import React from 'react'
import Layout from '../components/Layout/Layout'
import { Carousel } from 'react-carousel-minimal';


const data = [
  {
    image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/t/b/p112469-1671114722639b2fe28ab22.jpg?tr=tr:n-large",
    caption: "Relish Our Cuisine"
  },
  
  {
    image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/n/m/p112469-1671114709639b2fd5a7b30.jpg?tr=tr:n-xlarge",
    caption: "Monday - Sunday : 12:00 PM to 11:30 PM"
  },
  {
    image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/g/j/p112469-1671114697639b2fc9a4b30.jpg?tr=tr:n-xlarge",
    caption: "Cup Of Every Meet"
  },
  
];

const captionStyle = {
  fontSize: '3em',
  
  fontWeight: 'bold',
  textAlign:'center',
  
  padding:2,
  FontFace:'Dancing style',
  bgcolor: "#511609",
  color: "bisque",
}


const Home = () => {
  return (
    <>
  <Layout>
  <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          // padding: "0 20px"
        }}>
          <Carousel
            
            data={data}
            time={2000}
            width="auto"
            height="580px"
            captionStyle={captionStyle}
            // radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="top"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="full"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "2000px",
              maxHeight: "650px",
              //  margin: "20px auto",
            }}
          />
        </div>
      </div>
    </div>
  </Layout>
  </>
  )
}

export default Home