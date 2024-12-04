'use client';

import useSWR from 'swr';
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ResultDisplay({ name }: { name: string }) {
  const { data: nationalizeData, error: nationalizeError } = useSWR(
    `https://api.nationalize.io?name=${name}`,
    fetcher
  );
  const { data: genderizeData, error: genderizeError } = useSWR(
    `https://api.genderize.io?name=${name}`,
    fetcher
  );
  const { data: agifyData, error: agifyError } = useSWR(
    `https://api.agify.io?name=${name}`,
    fetcher
  );

  if (nationalizeError || genderizeError || agifyError)
    return <p>Error loading data. Please try again later.</p>;

  if (!nationalizeData || !genderizeData || !agifyData) return <p>Loading...</p>;

  return (
    <div>
      <Section>
        <SectionTitle>Nationalize:</SectionTitle>
        {nationalizeData.country && nationalizeData.country.length > 0 ? (
          <ul>
            {nationalizeData.country.map((country: any, index: number) => (
              <li key={index}>
                Country: {country.country_id}, Probability: {country.probability.toFixed(2)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available for Nationalize API.</p>
        )}
      </Section>

      <Section>
        <SectionTitle>Genderize:</SectionTitle>
        {genderizeData.gender ? (
          <p>
            Gender: {genderizeData.gender} (Probability: {genderizeData.probability.toFixed(2)})
          </p>
        ) : (
          <p>No data available for Genderize API.</p>
        )}
      </Section>

      <Section>
        <SectionTitle>Agify:</SectionTitle>
        {agifyData.age ? <p>Age: {agifyData.age}</p> : <p>No data available for Agify API.</p>}
      </Section>
    </div>
  );
}