import React, { useContext, useState } from 'react';
import { Form, Label, Input, Button, Select } from '../styles/Student.style';
import { ActivityContext } from '../context/activityContext';
function StudentForm() {
  // state for Form fields
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [contactNoGuardian, setContactNoGuardian] = useState('');
  const [authorisedPerson, setauthorisedPerson] = useState('');
  const [authorisedPersonID, setauthorisedPersonID] = useState('');
  const [activity1, setActivity1] = useState();
  const [activity2, setActivity2] = useState();
  const [activity3, setActivity3] = useState();

  const { activityList } = useContext(ActivityContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const activities = [activity1, activity2, activity3];

    const student = {
      studentName,
      grade,
      guardianName,
      contactNoGuardian,
      authorisedPerson,
      authorisedPersonID,
      activities,
    };

    const response = await fetch('/api/students', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (response.ok) {
      setStudentName('');
      setGrade('');
      setGuardianName('');
      setContactNoGuardian('');
      setauthorisedPerson('');
      setauthorisedPersonID('');
      setActivity1('select');
      setActivity2('select');
      setActivity3('select');

      console.log('new student added', json);
    }
  };

  return (
    <Form>
      <form onSubmit={handleSubmit}>
        <h3>Register a new Student</h3>
        <Label>Student Name</Label>
        <Input
          onChange={(e) => setStudentName(e.target.value)}
          value={studentName}
        />

        <Label>Grade</Label>
        <Input onChange={(e) => setGrade(e.target.value)} value={grade} />

        <Label>Guardian Name</Label>
        <Input
          onChange={(e) => setGuardianName(e.target.value)}
          value={guardianName}
        />

        <Label>Contact No</Label>
        <Input
          onChange={(e) => setContactNoGuardian(e.target.value)}
          value={contactNoGuardian}
        />
        <Label>Authorised Person For Pickup</Label>
        <Input
          onChange={(e) => setauthorisedPerson(e.target.value)}
          value={authorisedPerson}
        />
        <Label>Authorised Person ID</Label>
        <Input
          onChange={(e) => setauthorisedPersonID(e.target.value)}
          value={authorisedPersonID}
        />

        <Label>Select Activity 1</Label>
        <Select
          onChange={(e) => setActivity1(e.target.value)}
          value={activity1}
        >
          <option value='select'>select</option>
          {activityList &&
            activityList.map((a) => <option value={a.name}>{a.name}</option>)}
        </Select>
        <Label>Select Activity 2</Label>
        <Select
          onChange={(e) => setActivity2(e.target.value)}
          value={activity2}
        >
          <option value='select'>select</option>
          {activityList &&
            activityList.map((a) => <option value={a.name}>{a.name}</option>)}
        </Select>
        <Label>Select Activity 3</Label>
        <Select
          onChange={(e) => setActivity3(e.target.value)}
          value={activity3}
        >
          <option value='select'>select</option>
          {activityList &&
            activityList.map((a) => <option value={a.name}>{a.name}</option>)}
        </Select>
        <Button>Add Student</Button>
      </form>
    </Form>
  );
}

export default StudentForm;
