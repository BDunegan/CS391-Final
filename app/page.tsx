"use client";

/*
CS391 Final Project
Work Breakdown:
  Brandon Dunegan - Form components and Section aggregation
  Dillan Pho - Gender API Section Component
  Valentina Haddad - Nationalize API Section Component
  Marisol Jimenez - Age API Section Component
*/

import Form from '@/components/Form';
import ResultDisplay from '@/components/ResultDisplay';
import styled from 'styled-components';
import { useState } from 'react';

//Container for the main body of the page
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

//A cool looking title
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

export default function Home() {
  //A hook to pass to the form to save the name input (useful to pass to API's)
  const [displayName, setDisplayName] = useState('');

  //Logic for the form submission
  const handleFormSubmit = (name: string) => {
    console.log(name)
    setDisplayName(name);
    console.log(displayName);
  };

  return (
    <Container>
      <Title>Name Display App</Title>
      {/* Call the form to get a name input */}
      <Form onSubmit={handleFormSubmit} />
      {/* If displayName is not empty string then call a Title and ResultDisplay (API's) components */}
      {displayName && (
        <>
          <Title>Name: {displayName} </Title>
          <ResultDisplay name={displayName}/>
        </>
      )}
    </Container>
  );
}