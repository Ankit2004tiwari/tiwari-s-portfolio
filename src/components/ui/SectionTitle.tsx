import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  align = 'left' 
}) => {
  const alignmentClasses = {
    left: 'text-left after:left-0',
    center: 'text-center after:left-1/2 after:-translate-x-1/2',
    right: 'text-right after:right-0'
  };

  return (
    <h2 className={`section-title ${alignmentClasses[align]}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;