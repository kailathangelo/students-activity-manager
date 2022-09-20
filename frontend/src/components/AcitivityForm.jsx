import React, { useState, useContext } from 'react';
import { Form, Label, Input, Button } from '../styles/Activity.style';
import { ActivityContext } from '../context/activityContext';

function AcitivityForm() {

  const {  dispatch } = useContext(ActivityContext);

  const [name, setActivityName] = useState('');
  const [ageGroup, setAge] = useState('');
  const [tutor, setTutor] = useState('');
  const [fee, setFee] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const activity = { name, ageGroup, tutor, fee };
    
    const response = await fetch('/api/activities', {
      method: 'POST',
      body: JSON.stringify(activity),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (response.ok) {
      setActivityName('');
      setAge('');
      setTutor('');
      setFee('');
      console.log('new activity added', json);
      dispatch({ type: 'CREATE_ACTIVITY', payload: json });
    }
  };

  return (
    <Form>
      <form onSubmit={handleSubmit}>
        <h3>Add a New Activity</h3>
        <Label htmlFor=''>Name</Label>
        <Input
          type='text'
          onChange={(e) => setActivityName(e.target.value)}
          value={name}
        />
        <Label htmlFor=''>Age</Label>
        <Input
          type='text'
          onChange={(e) => setAge(e.target.value)}
          value={ageGroup}
        />
        <Label htmlFor=''>Tutor</Label>
        <Input
          type='text'
          onChange={(e) => setTutor(e.target.value)}
          value={tutor}
        />
        <Label htmlFor=''>Fee</Label>
        <Input
          type='text'
          onChange={(e) => setFee(parseInt(e.target.value))}
          value={fee}
        />
        <Button>Add Activity</Button>
      </form>
    </Form>
  );
}

export default AcitivityForm;
