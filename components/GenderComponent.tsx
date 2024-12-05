// import useSWR from "swr";
// import styled from 'styled-components';

// const Section = styled.div`
//   margin-bottom: 32px;
// `;

// const SectionTitle = styled.h2`
//   font-size: 18px;
//   font-weight: bold;
//   color: #333;
// `;

// const GenderText = styled.p<{ gender: string }>`
//   background-color: ${({ gender }) => (gender === 'male' ? '#89CFF0' : gender === 'female' ? 'pink' : '#333')};
//   color: white;
//   padding: 10px;
//   border-radius: 8px;
// `;

// const fetcher = (url: string) => fetch(url).then(res => res.json());

// export default function GenderComponent({ name }: { name: string }){
//     const { data: genderizeData, error: genderizeError } = useSWR(`https://api.genderize.io?name=${name}`, fetcher);
//     if (genderizeError)
//         return <p>Error loading data. Please try again later.</p>;

//     if (!genderizeData) return <p>Loading...</p>;
//     return(
//         <Section>
//                 <SectionTitle>Genderize:</SectionTitle>
//                 {genderizeData.gender ? (
//                     <GenderText gender={genderizeData.gender}>
//                         Gender: {genderizeData.gender.toUpperCase()} (Probability: {genderizeData.probability.toFixed(2)})
//                     </GenderText>
//                 ) : (
//                     <p>No data available for Genderize API.</p>
//                 )}
//             </Section>
//     )
// }