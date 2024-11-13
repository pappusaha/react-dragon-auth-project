import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';





const LeftSideNav = () => {

    const [newsCategories, setNewsCategories]=useState([])
useEffect(() => {
    fetch('categories.json')
    .then( response =>  response.json())
    .then(data => setNewsCategories(data))
},[])
    return (
        <div className='p-2'>
           <h1 className='text-3xl'> All categories:-{newsCategories.length}</h1>
          <div className='space-y-6'>
{
  newsCategories.map(category => <NavLink to={`/category/${category.id}` } className={'block mt-5 hover:bg-[#E7E7E7] p-2 '} key={category.id} > {category.name} </NavLink>) 
}
          </div>
        </div>
    );
};

export default LeftSideNav;