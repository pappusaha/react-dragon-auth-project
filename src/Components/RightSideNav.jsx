import React from 'react';
// import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub, FaFacebook,FaTwitter,FaInstagram
} from "react-icons/fa";
import Qppicture1 from '../assets/swimming.png'
import Qppicture2 from '../assets/class.png'
import Qppicture3 from '../assets/playground.png'

const RightSideNav = () => {
    return (
        <div className='p-2'>
            <h2 className='text-2xl mb-4'> Login with </h2>
            <div>
                <button className='btn btn-outline w-full flex items-center'>
                    <FaGoogle />

                    log-in with google
                </button>
                <button className='btn btn-outline w-full flex items-center'>
                    <FaGithub />


                    log-in with Github
                </button>

            </div>
            {/* this find section  */}
            <div className='mt-5 '>
                <h1 className='mb-5'> Find us on </h1>
                <a className='flex items-center  border rounded-t-lg p-4 gap-2' href="">
                    <FaFacebook />

                    Facebook
                </a>
                <a className='flex items-center  border-x  p-4 gap-2' href="">
                <FaTwitter className=' ' />


                    Twitter
                </a>
                <a className='flex items-center  border rounded-b-lg p-4 gap-2' href="">
                <FaInstagram />


                Instagram
                </a>

            </div>
            {/*  this is Q zone  */}
            <div className='mt-8 p-2 space-y-3 '>
<h1 className='font-semibold text-xl'> Q-zone </h1>
<img src={Qppicture1} alt="" />   
<img src={Qppicture2} alt="" />   
<img src={Qppicture3} alt="" />   

            </div>
        </div>
    );
};

export default RightSideNav;