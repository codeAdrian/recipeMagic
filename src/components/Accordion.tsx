import React, { useState } from 'react';

export const Accordion = ({ children }: any) => {
  const [isActive, setIsActive] = useState(false);

  const handleAccordion = () => setIsActive(!isActive);

  return (
    <div
      className={`accordion__content ${
        isActive ? 'accordion__content--active' : ''
      }`}
    >
      {children}
    </div>
  );
};
