/* Dillan Pho's Component*/

import useSWR from "swr";
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function GenderComponent({ name }: { name: string }){
    const { data: genderizeData, error: genderizeError } = useSWR(`https://api.genderize.io?name=${name}`, fetcher);
    if (genderizeError)
        return <p>Error loading data. Please try again later.</p>;

    if (!genderizeData) return <p>Loading...</p>;
    return(
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
    )
}