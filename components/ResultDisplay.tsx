'use client';
import useSWR from 'swr';
import styled from 'styled-components';
import NationalizeSection from './NationalizeSection';

// Styled Components
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
    const { data: genderizeData, error: genderizeError } = useSWR(
        `https://api.genderize.io?name=${name}`,
        fetcher
    );
    const { data: agifyData, error: agifyError } = useSWR(
        `https://api.agify.io?name=${name}`,
        fetcher
    );

    if (genderizeError || agifyError)
        return <p>Error loading data. Please try again later.</p>;

    if (!genderizeData || !agifyData) return <p>Loading...</p>;

    return (
        <div>
            {/* Use the NationalizeSection component */}
            <NationalizeSection name={name} />

            {/* Genderize Section */}
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

            {/* Agify Section */}
            <Section>
                <SectionTitle>Agify:</SectionTitle>
                {agifyData.age ? <p>Age: {agifyData.age}</p> : <p>No data available for Agify API.</p>}
            </Section>
        </div>
    );
}
