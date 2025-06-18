import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {Results} from './Results'


const paths =['/search','/images','/news','/videos'];
export const AppRoutes = () => {
  return (
   <div className='p-4'>
    <Routes>
      <Route path='/' element = {<Navigate to= "/search" />}/>
      {paths.map((path)=>
      <Route  path ={path} element ={<Results/>}/>

      )}

      <Route path='*' element= {<div>404 not Found</div>}/>
    </Routes>
   </div>
  );
};
