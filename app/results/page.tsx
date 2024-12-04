'use client';

import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import ResultDisplay from '@/components/ResultDisplay';

const Container = styled.main`
  padding: 32px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  if (!name) {
    return (
      <Container>
        <Title>Missing name query parameter.</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Results for "{name}"</Title>
      <ResultDisplay name={name} />
    </Container>
  );
}
