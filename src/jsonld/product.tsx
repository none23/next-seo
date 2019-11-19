import React, { FC } from 'react';

import JsonLd from './JsonLd';

type ReviewRating = {
  bestRating?: string;
  ratingValue: string;
  worstRating?: string;
};

type Review = {
  author: string;
  datePublished?: string;
  reviewBody?: string;
  name?: string;
  reviewRating: ReviewRating;
};

type Offers = {
  price: string;
  priceCurrency: string;
  priceValidUntil?: string;
  itemCondition?: string;
  availability?: string;
  seller: {
    name: string;
  };
};

type AggregateRating = {
  ratingValue: string;
  reviewCount: string;
};

export interface ProductJsonLdProps {
  productName: string;
  images?: string[];
  description?: string;
  brand?: string;
  reviews?: Review[];
  aggregateRating?: AggregateRating;
  offers: Offers;
  sku?: string;
  gtin8?: string;
  gtin13?: string;
  gtin14?: string;
  mpn?: string;
}

const buildBrand = (name: string) => ({ '@type': 'Thing', name });

const buildReviewRating = ({
  bestRating,
  worstRating,
  ratingValue,
}: ReviewRating) => ({
  '@type': 'Rating',
  bestRating,
  worstRating,
  ratingValue,
});

const buildReview = ({
  datePublished,
  name,
  reviewRating,
  reviewBody,
  author,
}: Review) => ({
  '@type': 'Review',
  datePublished,
  reviewBody,
  name,
  reviewRating: reviewRating ? buildReviewRating(reviewRating) : undefined,
  author,
});

const buildAggregateRating = ({
  ratingValue,
  reviewCount,
}: AggregateRating) => ({
  '@type': 'AggregateRating',
  ratingValue,
  reviewCount,
});

// TODO: Docs for offers itemCondition & availability
// TODO: Seller type, make dynamic
const buildOffers = ({
  priceCurrency,
  priceValidUntil,
  itemCondition,
  availability,
  seller,
  price,
}: Offers) => ({
  '@type': 'Offer',
  priceCurrency,
  priceValidUntil,
  itemCondition,
  availability,
  seller: seller ? { '@type': 'Organization', name: seller.name } : undefined,
  price,
});

const ProductJsonLd: FC<ProductJsonLdProps> = ({
  productName,
  images = [],
  description,
  sku,
  gtin8,
  gtin13,
  gtin14,
  mpn,
  brand,
  reviews = [],
  aggregateRating,
  offers,
}) => {
  const value = {
    '@context': 'http://schema.org/',
    '@type': 'Product',
    image: images,
    description,
    mpn,
    sku,
    gtin8,
    gtin13,
    gtin14,
    brand: brand ? buildBrand(brand) : undefined,
    review: reviews.length ? reviews.map(buildReview) : undefined,
    aggregateRating: aggregateRating
      ? buildAggregateRating(aggregateRating)
      : undefined,
    offers: buildOffers(offers),
    name: productName,
  };
  return <JsonLd keyProp="jsonld-product" value={value} />;
};

export default ProductJsonLd;
