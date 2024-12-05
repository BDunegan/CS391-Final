'use client';
{/* Valentina Haddad's Component*/}
import useSWR from 'swr';
import styled from 'styled-components';

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

interface NationalizeSectionProps {
    name: string;
}

const NationalizeSection = ({ name }: NationalizeSectionProps) => {
    const { data, error } = useSWR(`https://api.nationalize.io?name=${name}`, fetcher);

    if (error) return <p>Error loading Nationalize data. Please try again later.</p>;
    if (!data) return <p>Loading Nationalize data...</p>;

    return (
        <Section>
            <SectionTitle>Nationalize:</SectionTitle>
            {data.country && data.country.length > 0 ? (
                <ul>
                    {data.country.map((country: any, index: number) => (
                        <li key={index}>
                            Country: {country.country_id}, Probability: {country.probability.toFixed(2)}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>There is no data available for Nationalize API :(.</p>
            )}
        </Section>
    );
};

export default NationalizeSection;
