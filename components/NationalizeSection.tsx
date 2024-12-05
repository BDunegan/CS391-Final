'use client';
// Indicates that this is a client-side React component. This is typically used in frameworks like Next.js.

{/* Valentina Haddad's Component*/}

import useSWR from 'swr';
// Imports the SWR library, which is used for data fetching with caching and revalidation.

import styled from 'styled-components';
// Imports the styled-components library for defining styled components in a React component.

import fetcher from "@/app/lib/fetcher";
// Styled Components
const Section = styled.div`
  margin-bottom: 32px;
`;
// Creates a styled `div` component with a bottom margin of 32px for spacing.

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
// Creates a styled `h2` component for section titles with a specific font size, weight, and color.


interface NationalizeSectionProps {
    name: string;
}
// Declares a TypeScript interface for the component's props, ensuring that the `name` prop is a string.

const NationalizeSection = ({ name }: NationalizeSectionProps) => {
    // Defines a functional component called `NationalizeSection` that takes `name` as a prop.

    const { data, error } = useSWR(`https://api.nationalize.io?name=${name}`, fetcher);
    // Uses the SWR hook to fetch data from the Nationalize API with the given `name`.
    // The `fetcher` function is used for fetching the data.

    if (error) return <p>Error loading Nationalize data. Please try again later.</p>;
    // Renders an error message if the data fetching process fails.

    if (!data) return <p>Loading Nationalize data...</p>;
    // Renders a loading message while the data is being fetched.

    return (
        <Section>
            {/* Wraps the component content inside a styled `Section` */}
            <SectionTitle>Nationalize:</SectionTitle>
            {/* Displays the section title */}
            {data.country && data.country.length > 0 ? (
                // Checks if the `country` data exists and has at least one item.
                <ul>
                    {data.country.map((country: any, index: number) => (
                        // Iterates over the `country` array and renders a list item for each entry.
                        <li key={index}>
                            {/* Assigns a unique key to each list item based on its index */}
                            Country: {country.country_id}, Probability: {country.probability.toFixed(2)}
                            {/* Displays the country ID and the probability (formatted to 2 decimal places) */}
                        </li>
                    ))}
                </ul>
            ) : (
                // Executes if there is no `country` data or the array is empty.
                <p>There is no data available for Nationalize API :(.</p>
                // Displays a fallback message when no data is returned from the API.
            )}
        </Section>
    );
};

export default NationalizeSection;
// Exports the `NationalizeSection` component as the default export.
