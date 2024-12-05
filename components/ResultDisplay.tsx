'use client';
import useSWR from 'swr';
import styled from 'styled-components';
import NationalizeSection from './NationalizeSection';
import GenderComponent from './GenderComponent';
import fetcher from "@/app/lib/fetcher";

// Styled Components
const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;


export default function ResultDisplay({ name }: { name: string }) {
    const { data: agifyData, error: agifyError } = useSWR(
        `https://api.agify.io?name=${name}`,
        fetcher
    );


    return (
        <div>
            {/* Use the NationalizeSection component */}
            <NationalizeSection name={name} />

            {/* Genderize Section */}
            <GenderComponent name={name}/>

            {/* Agify Section */}
            {/* <Section>
                <SectionTitle>Agify:</SectionTitle>
                {agifyData.age ? <p>Age: {agifyData.age}</p> : <p>No data available for Agify API.</p>}
            </Section> */}
        </div>
    );
}
