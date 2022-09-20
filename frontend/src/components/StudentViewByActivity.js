import React, { useState, useContext } from 'react';
import { ActivityContext } from '../context/activityContext';
import { Title } from '../styles/Student.style';
import { BtnLink, MiniNavbarContainer } from '../styles/Navbar.style';
import StudentCard from './StudentCard';

function StudentViewByActivity() {
  const { activityList } = useContext(ActivityContext);

  const [studentsWithSelectedActivity, setStudentsWithSelectedActivity] =
    useState();

  const ShowStudents = async (e) => {
    const selectedActivity = e.target.textContent;

    const response = await fetch('/api/students/' + selectedActivity);

    const json = await response.json();

    if (response.ok) {
      console.log(json);
      setStudentsWithSelectedActivity(json);
    }
  };

  return (
    <div>
      <Title>View Enrolled students by Activity</Title>
      <MiniNavbarContainer>
        {activityList &&
          activityList.map((activity) => (
            <BtnLink
              key={activity._id}
              onClick={ShowStudents}
              name={activity.name}
            >
              {activity.name}
            </BtnLink>
          ))}
      </MiniNavbarContainer>
      {studentsWithSelectedActivity &&
        studentsWithSelectedActivity.map((student) => (
          <StudentCard
            key={student._id}
            name={student.studentName}
            grade={student.grade}
          />
        ))}
    </div>
  );
}

export default StudentViewByActivity;
