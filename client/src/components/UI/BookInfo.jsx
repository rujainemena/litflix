import React, { useState } from 'react';

const BookDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the description expansion
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Display the first 10 lines of the description
  const displayDescription = isExpanded
    ? description // If expanded, show the full description
    : description.split('\n').slice(0, 10).join('\n'); // Show the first 10 lines

  return (
    <>
      <p>{displayDescription}</p>
      {description.length > 10 && (
        <button onClick={toggleDescription}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </>
  );
};

export default BookDescription;
