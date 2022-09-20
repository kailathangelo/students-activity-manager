import React, { useContext } from 'react'
import StudentForm from './StudentForm';
import StudentViewByActivity from './StudentViewByActivity';
import { Container, StudentContainer} from '../styles/Student.style'
function Students() {


  return (
    <Container>
      <StudentContainer>
        <StudentViewByActivity />
      </StudentContainer> 
      <StudentForm />
    </Container>
  );
}

export default Students