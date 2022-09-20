import React from 'react';
import {StudentActivityCard } from '../styles/Student.style'
function StudentCard({ name, grade }) {
  return (
    <StudentActivityCard>
      <p>Name: {name}</p>
      <p>Grade: {grade}</p>
    </StudentActivityCard>
  );
}

export default StudentCard;
