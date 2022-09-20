import React, { useContext } from 'react';
import { Card } from '../styles/Activity.style';
import { Span } from '../styles/Activity.style';
import { ActivityContext } from '../context/activityContext';

function ActivityCard({ id, name, ageGroup, tutor, fee }) {
  const { dispatch } = useContext(ActivityContext);

  const handleClick = async () => {
    const response = await fetch('/api/activities/' + id, {
      method: 'DELETE',
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_ACTIVITY', payload: json });
    }
  };

  return (
    <Card>
      <p>Name: {name}</p>
      <p>Age Group: {ageGroup}</p>
      <p>Tutor: {tutor}</p>
      <p>Fee: {fee}</p>
      <Span className='material-symbols-outlined' onClick={handleClick}>
        delete
      </Span>
    </Card>
  );
}

export default ActivityCard;
