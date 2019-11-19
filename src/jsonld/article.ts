import createJsonLd from '../utils/createJsonld';

export declare interface ArticleJsonLdProps {
  url: string;
  title: string;
  images: ReadonlyArray<string>;
  datePublished: string;
  dateModified?: null | undefined | string;
  authorName: string;
  description: string;
  publisherName: string;
  publisherLogo: string;
}

const buildArticleJsonLd = ({
  url,
  title,
  images = [],
  datePublished,
  dateModified = null,
  authorName,
  description,
  publisherName,
  publisherLogo,
}: ArticleJsonLdProps) => ({
  '@context': 'http://schema.org',
  '@type': 'Article',
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
  publisher: {
    '@type': 'Organization',
    name: publisherName,
    logo: {
      '@type': 'ImageObject',
      url: publisherLogo,
    },
  },
  description,
});

export default createJsonLd('jsonld-article', buildArticleJsonLd);
