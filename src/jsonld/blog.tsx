import React, { FC } from 'react';

import JsonLd from './JsonLd';

export interface BlogJsonLdProps {
  url: string;
  title: string;
  images: ReadonlyArray<string>;
  datePublished: string;
  dateModified: string;
  authorName: string;
  description: string;
}

const BlogJsonLd: FC<BlogJsonLdProps> = ({
  url,
  title,
  images = [],
  datePublished,
  dateModified = null,
  authorName,
  description,
}) => {
  const value = {
    '@context': 'http://schema.org',
    '@type': 'Blog',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    image: images,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    description,
  };
  return <JsonLd keyProp="jsonld-blog" value={value} />;
};

export default BlogJsonLd;
