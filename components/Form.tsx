"use client";

{/* Brandon Dunegan's Component*/}

import styled from 'styled-components';
import { useState } from 'react';

//Style for a Form (for input)
const FormWrapper = styled.form`
  display: flex;
  gap: 16px;
  align-items: center;
`;

//Style for the input field
const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

//Style for a Submit Button
const Button = styled.button`
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2ecc71;
  }
`;

//Explicity define the parameter type of Form
interface FormProps {
  onSubmit: (name: string) => void;
}

//Declare the form as a function component and require an onSubmit to be passed
const Form: React.FC<FormProps> = ({ onSubmit }) => {
  
  //Hook used to store the name entered
  const [name, setName] = useState('');

  //handleSubmit changes the stored name
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //Dont let it be empty (prevents API spaming)
    onSubmit(name); //set the name on submitted
    setName(''); // Clear the input field after submission
  };

  return (
    <FormWrapper onSubmit={handleSubmit}> {/* When form is submitted, call handleSubmit*/}
      <label htmlFor="nameInput">Enter your name: </label>
      <Input
      // {input must be text (a name)}
        type="text"
      //Set the id to access the value
        id="nameInput"
      //set the value of the input
        value={name}
      //when changed store the new text in the useState hook
        onChange={(e: any) => setName(e.target.value)}
      //The field must be filled to submit (and cannot be default)
        required
      />
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

export default Form;