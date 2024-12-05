// Importing libraries and utilities
import useSWR from 'swr'; // SWR is a React hook library for data fetching with built-in caching and revalidation.
import styled from 'styled-components'; // Used for creating styled components in React.
import fetcher from "@/lib/fetcher"; // Custom fetcher function for making API requests.

// Styled Components
// Section: A styled wrapper component to provide consistent margin and structure.
const Section = styled.div`
  margin-bottom: 32px;
`;

// SectionTitle: A styled title component for consistent text styling.
const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333; // Dark gray color for the text.
`;

// Props interface for the component
interface GuessAgeProps {
  name: string; // Expects a single prop `name` of type `string`.
}

// Main functional component: GuessAgeSection
const GuessAgeSection = ({ name }: GuessAgeProps) => {
    // SWR hook to fetch data from the Ageify API.
    const { data, error } = useSWR(`https://api.agify.io?name=${name}`, fetcher);

    // Error state: If an error occurs during data fetching, display an error message.
    if (error) return <p>Error loading Ageify data. Please try again later.</p>;

    // Loading state: While waiting for data, display a loading message.
    if (!data) return <p>Loading Ageify data...</p>;

    // Render fetched data
    return (
        <Section>
            <SectionTitle>Ageify:</SectionTitle>
            {data.age ? ( // If the API provides an age in the response:
                <p>
                    {data.name} is {data.age} years old. {/* Display the guessed name and age */}
                </p>
            ) : (
                // If the API does not return an age, show a fallback message.
                <p>There is no data available for Ageify API :(.</p>
            )}
        </Section>
    );
};

// Export the component for use in other parts of the application.
export default GuessAgeSection;