import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ActivityContainer = styled.div`
  flex-direction: column;
  width: 70%;
`;

export const Card = styled.div`
  position: relative;
  box-sizing: border-box;
  color: #2c2c2c;
  padding: 10px;
  margin: 10px 10px;
  /* border: 1px #5db5f8 solid; */
  border-radius: 5px;
  background-color: #ffffff;
`;

export const Form = styled.div`
  box-sizing: border-box;
  width: 30%;
  /* border: 1px solid black; */
  margin: 10px 10px 10px auto;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
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

export const Span = styled.span`
  position: absolute;
  top: 5px;
  right: 1px;
  cursor: pointer;
  background: #f1f1f1;
  padding: 6px;
  border-radius: 50%;
  color: #333;
`;
