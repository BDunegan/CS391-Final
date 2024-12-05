/*Dillan Pho's Component*/

// Import necessary libraries and hooks
import useSWR from "swr";
import styled from 'styled-components';
import fetcher from "@/lib/fetcher";

// Styled component for the section container
const Section = styled.div`
  margin-bottom: 32px;
`;

// Styled component for the section title
const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

// Styled component for the gender text with dynamic background color based on gender
const GenderText = styled.p<{ gender: string }>`
  background-color: ${({ gender }) => (gender === 'male' ? '#89CFF0' : gender === 'female' ? 'pink' : '#333')};
  color: white;
  padding: 10px;
  border-radius: 8px;
`;

// Fetcher function to fetch data from the given URL and parse it as JSON


// GenderComponent functional component
export default function GenderComponent({ name }: { name: string }){
    // Use SWR hook to fetch gender data based on the provided name
    const { data: genderizeData, error: genderizeError } = useSWR(`https://api.genderize.io?name=${name}`, fetcher);

    // Handle error state
    if (genderizeError){
        return <p>Error loading data for Genderize API</p>;
    }

    if (!genderizeData){
        return <p>Please wait.</p>;
    }

    // Render the component
    return(
        <Section>
            <SectionTitle>Genderize:</SectionTitle>
            {genderizeData.gender ? (
                // Display gender and probability if data is available
                <GenderText gender={genderizeData.gender}>
                    Gender: {genderizeData.gender.toUpperCase()} (Probability: {genderizeData.probability.toFixed(2)})
                </GenderText>
            ) : (
                // Display message if no data is available
                <p>No data available for Genderize API.</p>
            )}
        </Section>
    )
}