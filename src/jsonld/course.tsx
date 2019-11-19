import React, { FC } from 'react';

import JsonLd from './JsonLd';

export interface CourseJsonLdProps {
  courseName: string;
  description: string;
  providerName: string;
  providerUrl?: string;
}

const CourseJsonLd: FC<CourseJsonLdProps> = ({
  courseName,
  description,
  providerName,
  providerUrl,
}) => {
  const value = {
    '@context': 'http://schema.org',
    '@type': 'Course',
    name: courseName,
    description,
    provider: {
      '@type': 'Organization',
      name: providerName,
      sameAs: providerUrl,
    },
  };
  return <JsonLd keyProp="jsonld-course" value={value} />;
};

export default CourseJsonLd;
