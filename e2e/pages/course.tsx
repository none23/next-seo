import React from 'react';
import { CourseJsonLd } from 'next-seo';

export default () => (
  <>
    <h1>Course Name</h1>

    <CourseJsonLd
      courseName="Course Name"
      providerName="Course Provider"
      providerUrl="https//www.example.com/provider"
      description="Course description goes right here"
    />
  </>
);
