import React from 'react';
import {styled} from '@mui/material';
import './home.css'

const Head = styled("p")`
  font-size: 55px;
  margin: 70px;
  font-weight: bold;
  color: black;
`;

const Home = () =>{
    return (
      <div className="img1">
        <Head>Welcome to Bloggers page</Head>
      </div>
    );
}

export default Home;