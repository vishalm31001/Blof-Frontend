import React from 'react';
import {styled} from '@mui/material';

const Head = styled("p")`
  font-size: 40px;
  margin: 18% 0 0 23%;
  font-weight: bold;
  color: #c71585;
`;

const Home = () =>{
    return(
        <Head>Welcome to Bloggers page</Head>
    )
}

export default Home;