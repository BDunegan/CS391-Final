'use client';
import NationalizeSection from './NationalizeSection';
import GenderComponent from './GenderComponent';
import GuessAgeSection from './AgeComponent';

// ResultDisplay Component take a name as a prop and agregates all 3 sections 
//by pushing the API call to each section and passing the name as a parameter!
export default function ResultDisplay({ name }: { name: string }) {
    return (
        <div>
            {/* Use the NationalizeSection component */}
            <NationalizeSection name={name} />

            {/* Use the GenderizeSection component */}
            <GenderComponent name={name}/>

            {/* Use the AgifySection component */}
            <GuessAgeSection name={name}/>
        </div>
    );
}
