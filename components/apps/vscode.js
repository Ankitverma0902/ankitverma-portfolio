import React from 'react'

export default function VsCode() {
    return (
        <iframe
            src="https://github1s.com/Ankitverma0902" 
            frameBorder="0" 
            title="VsCode"
            className="h-full w-full bg-ub-cool-grey"
        ></iframe>
    )
}

// Function to display in main component
export const displayVsCode = () => {
    return <VsCode />;
}
