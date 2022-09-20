import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import { ActivityContext } from './context/activityContext';

// Components
import Activities from './components/Activities';
import Navbar from './components/Navbar';
import Students from './components/Students';

function App() {
  const { dispatch } = useContext(ActivityContext);

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await fetch('/api/activities');
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'SET_ACTIVITIES', payload: json });
      }
    };
    fetchActivities();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/activities' element={<Activities />}></Route>
        <Route path='/students' element={<Students />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
