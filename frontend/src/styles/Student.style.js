import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const StudentContainer = styled.div`
  flex-direction: row;
  width: 70%;
`;

export const Form = styled.div`
  width: 30%;
  margin: 10px;
`;

export const Label = styled.label`
  display: block;
  margin: 5px;
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 5px;
  margin: 10px auto;
  background-color: #9dd2fa;
  color: #ffffff;
  width: 100%;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
`;

export const Title = styled.h3`
  display: block;
  text-align: left;
  margin-left: 50px;
`;

export const StudentActivityCard = styled.div`
  position: relative;
  box-sizing: border-box;
  color: #2c2c2c;
  padding: 10px;
  margin: 10px;
  margin-left: 150px;
  border-radius: 5px;
  background-color: #ffffff;
  width: 25%;
`;
