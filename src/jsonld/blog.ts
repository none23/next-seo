import createJsonLd from '../utils/createJsonld';

export interface BlogJsonLdProps {
  url: string;
  title: string;
  images: ReadonlyArray<string>;
  datePublished: string;
  dateModified?: string | null | undefined;
  authorName: string;
  description: string;
}

const buildBlogJsonLd = ({
  url,
  title,
  images = [],
  datePublished,
  dateModified = null,
  authorName,
  description,
}: BlogJsonLdProps) => ({
  '@context': 'http://schema.org',
  '@type': 'Blog',
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  headline: title,
  image: images,
  datePublished: datePublished,
  dateModified: dateModified || datePublished,
  author: { '@type': 'Person', name: authorName },
  description,
});

export default createJsonLd('jsonld-blog', buildBlogJsonLd);
