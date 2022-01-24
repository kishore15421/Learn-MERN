import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const handleNavigateToMaps = () => {
    navigate('/maps')
  }
  return <div className='main'>
    <button className='btn btn-outline-primary rounded-pill btn-sm' onClick={handleNavigateToMaps}>Maps</button>
    <button className='btn btn-outline-primary rounded-pill btn-sm pl-3'>Charts</button>
  </div>;
};

export default Main;
