"use client";

import Form from '@/components/Form';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

export default function Home() {
  return (
    <Container>
      <Title>Name Analysis App</Title>
      <Form />
    </Container>
  );
}