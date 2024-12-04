"use client";

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const FormWrapper = styled.form`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

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

export default function Form() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      router.push(`/results?name=${name}`);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        placeholder="Enter a name"
        required
      />
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
}