import React from 'react';
import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import RightSideNav from '../../Components/RightSideNav';
import LeftSideNav from '../../Components/leftSIdenav';
import BreakingNews from '../BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar> </Navbar>
     <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='grid col-span-1 border'>
  <LeftSideNav> </LeftSideNav>
        </div>
        <div className='grid col-span-1 md:col-span-2 border'>
            <h1 className='text-4xl'> news is coming soon!! </h1>
        </div>
        <div className='grid col-span-1 border'>
            <RightSideNav></RightSideNav>
        </div>
     </div>
        </div>
    );
};

export default Home;