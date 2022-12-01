import React from 'react';
import {styled} from '@mui/material';
import image from './images/A.jpg'
import './home.css'

const Head = styled("p")`
  font-size: 40px;
  margin: 0px;
  font-weight: bold;
  color: #c71585;
`;

const Home = () =>{
    return (
      <div className="img1">
        <Head>Welcome to Bloggers page</Head>
        {/* <img src={image}></img> */}
      </div>
    );
}

export default Home;