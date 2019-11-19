import createJsonLd from '../utils/createJsonld';

export interface CourseJsonLdProps {
  courseName: string;
  description: string;
  providerName: string;
  providerUrl?: string;
}

const buildCourseJsonLd = ({
  courseName,
  description,
  providerName,
  providerUrl,
}: CourseJsonLdProps) => ({
  '@context': 'http://schema.org',
  '@type': 'Course',
  name: courseName,
  description,
  provider: {
    '@type': 'Organization',
    name: providerName,
    sameAs: providerUrl,
  },
});

export default createJsonLd('jsonld-course', buildCourseJsonLd);
